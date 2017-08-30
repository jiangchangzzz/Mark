import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import './style.scss';
import Editor from '../../../components/Editor';
import { MarkStore, TopicStore, HomeParam } from '../../../types';
import * as topicAction from '../../../actions/topic';

interface MarkdownProps {
    topic: TopicStore;
    topicAction: any;
    notebookId: string;
    topicId: string;
}

class Markdown extends React.Component<MarkdownProps & RouteComponentProps<HomeParam>, any> {
    renderEditor() {
        const { topic, notebookId, topicId } = this.props;
        const topics = topic[notebookId];
        if (topics) {
            let currentTopic;
            topics.data.every(function (item) {
                if (item._id === topicId) {
                    currentTopic = item;
                    return false;
                }
                return true;
            });
            if(currentTopic){
                return <Editor topic={currentTopic} />;
            }
        }

        return <p className="markdown-info">加载中...</p>;
    }

    render() {
        return (
            <div className="markdown section">
                {this.renderEditor()}
            </div>
        );
    }
}

const mapStateToProps = (state: MarkStore) => {
    return {
        topic: state.topic
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MarkStore>) => {
    return {
        topicAction: bindActionCreators<any>(topicAction, dispatch)
    }
}

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps
)(Markdown);