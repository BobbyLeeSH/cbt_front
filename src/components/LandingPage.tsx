import React, {useLayoutEffect} from "react";
import {useHistory} from "react-router";

const LandingPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        history.push("/messages/all")
    })
    return (
        <div></div>
    )
}

export default LandingPage;
