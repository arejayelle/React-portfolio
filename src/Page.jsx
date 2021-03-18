import React from "react"

import HeaderWrapper from "./header/HeaderWrapper";

export default class Page extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        const { children } = this.props;
    
        return(
            <>
            <HeaderWrapper/>
            {children}
            </>
        )
    }
}