import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Back extends React.Component {
    render() {
        return (
            <div className="back">
                <Link className="back-link" to="/">回首页</Link>
            </div>
        );
    }
}

export default Back;