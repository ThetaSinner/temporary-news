export async function createSchema(client) {
    await client.query("CREATE TABLE IF NOT EXISTS AUTHOR ( \
        id SERIAL PRIMARY KEY, \
        username VARCHAR(255) UNIQUE, \
        email VARCHAR(255) UNIQUE \
    );")

    await client.query("CREATE TABLE IF NOT EXISTS NEWS_STORY ( \
        id SERIAL PRIMARY KEY, \
        title VARCHAR(255), \
        body VARCHAR(4096), \
        author INT, \
        FOREIGN KEY (author) REFERENCES AUTHOR(id) \
    );")
}

export async function deleteSchema(client) {
    await client.query('DROP TABLE NEWS_STORY')
    await client.query('DROP TABLE AUTHOR')
}
