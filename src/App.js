import React from 'react'
import {Event} from "./сomponents/Event";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "./сomponents/Map"; 
// ---------------------------------
import About from './сomponents/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return(

        

        <Router>
            <About/>
        </Router>

    )
}

// так було до мене
/* <Router>
<div>

<Switch>
    <Route exact path = "/" children = {<Map />}/>
    <Route exact path = "/event" children = {<Event/>}/>
</Switch>

</div>
</Router> */






