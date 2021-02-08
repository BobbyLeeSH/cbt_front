import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Test from "./components/Test";



function App() {
    return (
        <Router>
            <Route exact path="/" component={Test}/>
        </Router>
    );
}

export default App;
