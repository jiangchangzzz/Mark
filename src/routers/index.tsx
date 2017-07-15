import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from '../pages';
import Home from '../pages/Home';
import Preview from '../pages/Preview';
import Recycle from '../pages/Recycle';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

class Routers extends React.Component<any,any> {
    render() {
        return (
            <App>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/preview" component={Preview}/>
                        <Route path="/recycle" component={Recycle}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </App>
        );
    }
}

export default Routers;