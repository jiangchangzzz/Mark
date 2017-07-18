import * as React from 'react';
import './style.scss';

class Back extends React.Component {
    render() {
        return (
            <div className="back">
                <a className="back-link" href="/">回首页</a>
            </div>
        );
    }
}

export default Back;