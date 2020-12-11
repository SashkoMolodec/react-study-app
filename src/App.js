import React from 'react'
import {Event} from "./сomponents/Event";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "./сomponents/Map"; 
export default function App() {
    return(
        <Router>
            <div>
            
            
          
        
            <Switch>
                <Route exact path = "/" children = {<Map />}/>
                <Route exact path = "/event" children = {<Event/>}/>
            </Switch>

            </div>
        </Router>

    )
}








