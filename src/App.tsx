import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/Main";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        </>
    );
}

export default App;
