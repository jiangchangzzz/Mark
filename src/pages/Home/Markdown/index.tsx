import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './style.scss';
import Editor from '../../../components/Editor';
import { MarkStore, TopicStore, HomeRouterParam } from '../../../types';
import * as topicAction from '../../../actions/topic';

interface MarkdownProps {
    topic: TopicStore;
    topicAction: any;
}

class Markdown extends React.Component<MarkdownProps & RouteComponentProps<HomeRouterParam>, any> {
    renderEditor() {
        const { topic, match } = this.props;
        const { notebookid, topicid } = match.params;
        if (!topicid) {
            return <p className="markdown-info">请选择一篇文章</p>
        }
        else {
            const topics = topic[notebookid];
            if (topics) {
                let currentTopic;
                topics.data.every(function (item) {
                    if (item._id === topicid) {
                        currentTopic = item;
                        return false;
                    }
                    return true;
                })
                return <Editor topic={currentTopic} />
            }
            else{
                return <p className="markdown-info">加载中...</p>;
            }
        }
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

export default withRouter<any>(connect(
    mapStateToProps,
    mapDispatchToProps
)(Markdown));