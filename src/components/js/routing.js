import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog1 from './blog1.js';
import Blog2 from './blog2.js';
import Blog3 from './blog3.js';
import Home from '../../container/js/home';

class Routing extends Component{
    render() {
        return (
            <Router>
            <div>
               <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blog1" component={Blog1} />
                    <Route path="/blog2" component={Blog2} />
                    <Route path="/blog3" component={Blog3} />
                   
                </Switch>
            </div>
            </Router>
        )
    }
}

export default Routing;