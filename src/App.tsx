import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import GlobalStyle from "./GlobalStyle";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Route exact path="/login" component={Login}/>
            </Router>
        </>
    );
}

export default App;
