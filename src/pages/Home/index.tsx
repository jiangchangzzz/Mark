import * as React from 'react';
import { Route } from 'react-router-dom';

import './style.scss';
import Notebook from './Notebook';
import Topic from './Topic';
// import Markdown from './Markdown';

class Home extends React.Component<any, any> {
    render() {
        const { match } = this.props;
        return (
            <div className="container clearfix">
                <Notebook />
                <Route path={`${match.url}/:notebookid`} component={Topic} />
                <Route exact path={match.url} render={() => (
                    <div className="topic section">
                        <p className="home-info">请选择一个文集</p>
                    </div>
                )} />
            </div>
        );
    }
}

export default Home;