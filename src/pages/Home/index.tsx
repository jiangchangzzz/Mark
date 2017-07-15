import * as React from 'react';

import Notebook from './Notebook';
import Topic from './Topic';
import Markdown from './Markdown';

class Home extends React.Component<any,any> {
    render() {
        return (
            <div className="container clearfix">
                <Notebook/>
                <Topic/>
                <Markdown/>
            </div>
        );
    }
}

export default Home;