import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Button, FormControl} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./App.js";
import AddStoryForm from "./stories/AddStoryForm";

export default function AddStory() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div>
            <ThemeProvider theme={theme}>
                <AddStoryForm onSubmit={handleSubmit} />
            </ThemeProvider>
        </div>
    );
}

async function handleSubmit(event, title, body) {
    event.preventDefault()
    console.log(event, title, body)

    const data = {
        "author": {
            "username": "anonymous",
            "email": "anonymous@unidentified.net"
        },
        "title": title,
        "body": body
    }

    try {
        const result = await fetch('https://temporary-news-backend-thetasinner.cloud.okteto.net/newsStories/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });

        console.log(result)
    } catch (e) {
        console.error(e)
    }
}