import React from 'react';
import PropTypes from 'prop-types'
import Card from "@material-ui/core/Card";
import {CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    handleCaption: {
        color: "#7a7777"
    },
    expiredTile: {
        background: "#dbdddb",
        opacity: "0.8"
    },
    activeTile: {
        background: "#b3e2a1"
    },
    expiredTitle: {
        textDecoration: "line-through"
    }
})

export default function NewsTile({ title, author, expired, body }) {
    const classes = useStyles();

    const bodySection = expired ? (<></>) : (
        <Typography variant="body1">
            {body}
        </Typography>
    )

    const cardClass = expired ? classes.expiredTile : classes.activeTile

    const titleClass = expired ? classes.expiredTitle : ''

    return (
        <Card className={cardClass}>
            <CardContent>
                <Typography variant="h5" className={titleClass}>
                    {title}
                </Typography>
                <Typography variant="caption" className={classes.handleCaption}>
                    @{author}
                </Typography>
                {bodySection}
            </CardContent>
        </Card>
    )
}

NewsTile.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string
}
