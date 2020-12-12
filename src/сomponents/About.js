import React, { Component } from 'react'
import { TabContainer, Tab, Nav, Row, Col, Container, Tabs } from 'react-bootstrap';
import Pcomponent from './Pcomponent';
// ----------------------------------------
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Event} from "./Event";
import Map from "./Map"; 



// закинув все що було в app,  у Tab eventKey="Timeline" title="Timeline"

export default class About extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Timeline" title="Timeline">
                        <Router>
                            <div>
                                <Switch>
                                    <Route exact path = "/" children = {<Map />}/>
                                    <Route exact path = "/event" children = {<Event/>}/>
                                </Switch>
                            </div>
                        </Router>
                    </Tab>
                                
                    <Tab eventKey="About" title="About">
                        <Pcomponent />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}



