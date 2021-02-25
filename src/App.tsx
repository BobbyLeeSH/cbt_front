import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import GlobalStyle from "./GlobalStyle";
import Message from "./components/Message";
import CreateMessage from "./components/CreateMessage";
import LandingPage from "./components/LandingPage";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/messages" component={Message}/>
                <Route exact path="/messages/new" component={CreateMessage}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        </>
    );
}

export default App;
