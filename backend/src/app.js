import getStorage from "./storage.js";

export async function createNewsStory(createRequest) {
    if (!createRequest.author) {
        return Error('Missing author')
    }

    const author = createRequest.author;
    if (!author.username) {
        return Error('Author missing username')
    } else if (!author.email) {
        return Error('Author missing email')
    }

    let authorId = -1;
    const authors = await getStorage().findAuthor(author)
    if (!authors.length > 1) {
        return Error('Data uniqueness error in authors')
    } else if (authors.length === 1) {
        authorId = authors[0].id
    } else {
        const result = await getStorage().createAuthor(author)
        authorId = result.id
    }

    if (!createRequest.title) {
        return Error('News story missing title')
    } else if (!createRequest.body) {
        return Error('News story missing body')
    }

    await getStorage().createNewsStory(createRequest, authorId)
}

export async function getNewsStories() {
    const result = await getStorage().getNewsStories()
    return result.rows
}
