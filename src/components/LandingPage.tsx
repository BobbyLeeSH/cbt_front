import React, {useLayoutEffect} from "react";
import {useHistory} from "react-router";

const LandingPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        history.push("/messages")
    })
    return (
        <div></div>
    )
}

export default LandingPage;
