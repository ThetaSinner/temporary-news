import React from "react";
import {ButtonGroup, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import "./App.css"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ThemeProvider} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Button from "@material-ui/core/Button";
import AddStory from "./AddStory.js";
import StoryGrid from "./StoryGrid.js";

const useStyles = makeStyles((theme) => ({
    menuBar: {
        "flex-direction": "row",
    }
}));

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6fbf73',
            main: '#4caf50',
            dark: '#357a38',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

function App() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Router>
                    <ThemeProvider theme={theme}>
                        <AppBar color="primary" position="relative" className={classes.menuBar}>
                            <ButtonGroup>
                                <Button variant="text">
                                    <Typography variant="h6" onClick={() => {
                                        document.querySelectorAll(".HiddenLink")[0].click()
                                    }}>
                                        Home
                                        <Link to="/" className="HiddenLink">Home</Link>
                                    </Typography>
                                </Button>
                                <Button variant="text">
                                    <Typography variant="h6" onClick={() => {
                                        document.querySelectorAll(".HiddenLink")[1].click()
                                    }}>
                                        Add a story
                                        <Link to="/newStory" className="HiddenLink">Add a story</Link>
                                    </Typography>
                                </Button>
                            </ButtonGroup>
                        </AppBar>
                    </ThemeProvider>
                    <Switch>
                        <Route path="/newStory">
                            <AddStory />
                        </Route>
                        <Route path="/">
                            <h2>Welcome to Temporary News</h2>
                            <p>Have something to post? Go ahead and get started!</p>

                            <StoryGrid />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    );
}

export default App;
