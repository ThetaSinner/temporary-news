import pg from 'pg'
import {createSchema, deleteSchema} from "./database-schema.js";
import {readFileSync} from "fs";

const pgPool = createPool()

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pgPool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

let storageInstance = null;

export default function getStorage() {
    if (!storageInstance) {
        storageInstance = new TemporaryNewsStorage()
    }

    return storageInstance;
}

export class TemporaryNewsStorage {
    async setup() {
        await usingClient(async (client) => {
            await createSchema(client)
        });
    }

    async teardown() {
        await usingClient(async (client) => {
            await deleteSchema(client)
        })
    }

    async createAuthor(author) {
        return usingClient(async (client) => {
            const result = await client.query('INSERT INTO AUTHOR (username, email) VALUES ($1, $2) RETURNING id;', [author.username, author.email])
            return result.rows[0]
        })
    }

    async findAuthor(author) {
        return usingClient(async (client) => {
            const result = await client.query('SELECT * FROM AUTHOR WHERE username=$1 AND email=$2', [author.username, author.email])
            return result.rows
        })
    }

    async createNewsStory(newsStory, authorId) {
        return usingClient(async (client) => {
            await client.query('INSERT INTO NEWS_STORY (title, body, author) VALUES ($1, $2, $3)', [newsStory.title, newsStory.body, authorId])
        })
    }

    async getNewsStories() {
        return usingClient(async (client) => {
            return client.query('SELECT title, body, a.username FROM NEWS_STORY INNER JOIN AUTHOR AS a ON a.id = author')
        })
    }
}

async function usingClient(f) {
    const client = await pgPool.connect()
    try {
        return f(client)
    } finally {
        client.release()
    }
}

function createPool() {
    const options = {}

    const path = process.env.APP_SETTINGS
    if (path) {
        const settings = JSON.parse(readFileSync(path))
        if (settings.user) {
            options.user = settings.user
        }
        if (settings.host) {
            options.host = settings.host
        }
        if (settings.database) {
            options.database = settings.database
        }
        if (settings.password) {
            options.password = settings.password
        }
        if (settings.port) {
            options.port = settings.port
        }
    }

    return new pg.Pool(options)
}
