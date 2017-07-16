import * as React from 'react';
import './style.scss';

class NewTopic extends React.Component<any,any> {
    render() {
        return (
            <div className="new-topic">
                <p className="create-topic"><i className="icon icon-plus-circle"></i>新建文章</p>
            </div>
        );
    }
}

export default NewTopic;