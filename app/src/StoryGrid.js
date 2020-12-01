import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NewsTile from "./stories/NewsTile.js";

const useStyles = makeStyles((theme) => ({
    storyContainer: {
        padding: "0 .3rem",
        overflow: "hidden",
        "min-height": "12rem",
    },
    storyTitle: {
        margin: "0",
        "margin-top": ".2rem",
    },
    storyAuthor: {
        margin: "0",
        "margin-bottom": ".2rem",
    },
}));

export default function StoryGrid() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        async function fetchData() {
            const stories = await fetch('https://temporary-news-backend-thetasinner.cloud.okteto.net/newsStories/')

            if (stories.status !== 200) {
                console.error('Error from backend', stories)
                return
            }

            setStories(await stories.json())
        }

        fetchData()
    }, [])

    const storyItems = stories.map(story => (
        <Grid item xs={3} key={story.title}>
            <NewsTile title={story.title} author={story.username} body={story.body} />
        </Grid>
    ))

    return (
        <Grid container spacing={1}>
            {storyItems}
        </Grid>
    )
}
