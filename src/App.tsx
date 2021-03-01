import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import GlobalStyle from "./GlobalStyle";
import Message from "./components/Message";
import CreateMessage from "./components/CreateMessage";
import LandingPage from "./components/LandingPage";
import MessageDetail from "./components/MessageDetail";
import Participant from "./components/Participant";
import CreateParticipant from "./components/CreateParticipant";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Route exact path="/" component={LandingPage}/>
                <Switch>
                    <Route exact path="/messages/detail/:messageId" component={MessageDetail}/>
                    <Route exact path="/messages/:type" component={Message}/>
                    <Route exact path="/messages" component={Message}/>
                </Switch>
                <Switch>
                    <Route exact path="/participants" component={Participant}/>
                </Switch>
                <Route exact path="/new-participants" component={CreateParticipant}/>
                <Route exact path="/new-messages" component={CreateMessage}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        </>
    );
}

export default App;
