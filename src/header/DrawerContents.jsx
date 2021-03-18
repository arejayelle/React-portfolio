import { 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
} from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import React from "react"

export default function DrawerContents(props) {
    return (
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><Phone/></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>);
}