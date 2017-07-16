import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Editor from '../../../components/Editor';
import { StoreState, DataStore, Topic } from '../../../types';
import * as topicAction from '../../../actions/topic';

interface MarkdownProps{
    topic: DataStore<Topic>;
    topicAction: any;
}

class Markdown extends React.Component<MarkdownProps,any> {
    readonly topic: Topic={
        _id: '123456',
        title: 'red',
        content: 'bluec',
        summary: 'blu'
    }
    render() {
        return (
            <div className="markdown section">                
                <Editor topic={this.topic}/>
            </div>
        );
    }
}

const mapStateToProps=(state: StoreState)=>{
    return {
        topic: state.topic
    };
};

const mapDispatchToProps=(dispatch: Dispatch<StoreState>)=>{
    return {
        topicAction: bindActionCreators<any>(topicAction,dispatch)
    }
}

export default withRouter<any>(connect(
    mapStateToProps,
    mapDispatchToProps
)(Markdown));