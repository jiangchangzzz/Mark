import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, withRouter } from 'react-router-dom';

import './style.scss';
import Markdown from '../Markdown';
import NewTopic from '../../../components/NewTopic';
import TopicList from '../../../components/TopicList';
import { TopicStore, HomeParam, MarkStore } from '../../../types';
import * as topicAction from '../../../actions/topic';

interface TopicProps {
    topic: TopicStore;
    topicAction: any;
}

class Topic extends React.Component<TopicProps & RouteComponentProps<HomeParam>, any> {
    componentDidMount() {
        const { match } = this.props;
        let curId = match.params.notebookid;

        if (curId) {
            this.props.topicAction.getTopicsIfNeeded(curId);
        }
    }

    componentWillReceiveProps(nextprops) {
        let curId = this.props.match.params.notebookid;
        let nextId = nextprops.match.params.notebookid;

        if (nextId && nextId !== curId) {
            this.props.topicAction.getTopicsIfNeeded(nextId);
        }
    }

    renderTopicList = () => {
        const { notebookid } = this.props.match.params;
        const { topic } = this.props;
        const currentTopic = topic[notebookid];

        if (!currentTopic || currentTopic.isFetching) {
            return <p className="topic-info">加载中...</p>;
        }
        else if (currentTopic.error) {
            return <p className="topic-info">{topic.error}</p>;
        }
        else if (currentTopic.data.length === 0) {
            return <p className="topic-info">当前文集内没有文章</p>;
        }
        else {
            return <TopicList topics={currentTopic.data} />;
        }
    }

    render() {
        const {match}=this.props;
        const notebookId=match.params.notebookid;
        return (
            <div style={{height: '100%'}}>
                <div className="topic section">
                    <NewTopic />
                    {this.renderTopicList()}
                </div>
                <Route path={`${match.url}/topic/:topicid`} render={({match})=>(
                    <Markdown notebookId={notebookId} topicId={match.params.topicid}/>
                )} />
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
    };
};

export default withRouter<any>(connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic));