import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
            <Story title={story.title} body={story.body} author={story.username} />
        </Grid>
    ))

    return (
        <>
            <p>My lovely grid</p>
            <Grid container spacing={1}>
                {storyItems}
            </Grid>
        </>
    )
}

function Story(props) {
    const classes = useStyles()

    return (
        <Paper elevation={3} className={classes.storyContainer}>
            <h1 className={classes.storyTitle}>{shortenString(props.title, 20)}</h1>
            <h3 className={classes.storyAuthor}><em>{shortenString(props.author, 25)}</em></h3>
            <p>{shortenString(props.body, 200)}</p>
        </Paper>
    )
}

function shortenString(str, len) {
    let shortStr = str.substr(0, len)

    if (shortStr.length < str.length) {
        shortStr = shortStr.substr(0, shortStr.length - 3) + '...'
    }

    return shortStr
}
