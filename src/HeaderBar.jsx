import React from "react"

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export default function HeaderBar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Home/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Home
                </Typography>
            </Toolbar>
        </AppBar>);
}