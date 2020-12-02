import {Button, FormControl, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";

const useStyles = makeStyles({
    addStoryButton: {
        "margin-top": "1rem"
    }
})

export default function AddStoryForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const classes = useStyles()

    return (
        <>
            <h2>Add a story</h2>
            <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e, title, body)}>
                <FormControl fullWidth>
                    <TextField label="Title" value={title} onInput={(e) => setTitle(e.target.value)}/>
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="Your story" multiline rows={10} value={body}
                               onInput={(e) => setBody(e.target.value)}/>
                </FormControl>
                <Button variant="contained" color="primary" type="submit" className={classes.addStoryButton}>Add</Button>
            </form>
        </>
    )
}
