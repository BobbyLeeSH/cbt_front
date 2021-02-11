import React from "react";
import {logout} from "../modules/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

const Main = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(logout())
        history.push("/login")
    }
    return (
        <div>
            Hello This is Main Page
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Main;
