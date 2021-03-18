import { Drawer } from "@material-ui/core";
import React from "react"
import DrawerContents from "./DrawerContents";
import HeaderBar from "./HeaderBar"

export default class HeaderWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        };
        this.setOpen = this.setOpen.bind(this);
        this.setClose = this.setClose.bind(this);
    }

    setOpen() {
        this.setState({
            drawerOpen: true
        })
    }

    setClose() {
        this.setState({
            drawerOpen: false
        })
    }

    render() {
        const { drawerOpen } = this.state;

        const handler = {
            open: this.setOpen,
            close: this.setClose
        }
        return (
            <>
                <HeaderBar handleDrawer={handler} />
                <Drawer
                    anchor={"left"}
                    open={drawerOpen}
                    onClose={this.setClose}>
                        <DrawerContents/>
                </Drawer>
            </>
        )
    }
}