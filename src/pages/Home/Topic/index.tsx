import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.scss';
import NewTopic from '../../../components/NewTopic';
import TopicList from '../../../components/TopicList';
import { StoreState, DataStore, Topic as TopicType } from '../../../types';
import * as topicAction from '../../../actions/topic';

interface TopicProps{
    topic: DataStore<TopicType>;
    topicAction: any;
    match: any;
}

class Topic extends React.Component<TopicProps,any> {
    componentDidMount(){
        const {match}=this.props;
        let curId=match.params.notebookid;

        if(curId){
            this.props.topicAction.getTopics(curId);
        }
    }

    componentDidUpdate(prevProps,preState){
        let preId=prevProps.match.params.notebookid;
        let curId=this.props.match.params.notebookid;

        if(curId && curId!==preId){
            this.props.topicAction.getTopics(curId);
        }
    }

    renderTopicList=()=>{
        const {topic}=this.props;
        let notebookId=this.props.match.params.notebookid;

        if(topic.isFetching){
            return <p className="topic-info">加载中...</p>;
        }
        else if(topic.error){
            return <p className="topic-info">{topic.error}</p>;
        }
        else if(!notebookId){
            return <p className="topic-info">请选择一个文集</p>;
        }
        else if(topic.data.length===0){
            return <p className="topic-info">当前文集内没有文章</p>;
        }
        else{
            return <TopicList topics={topic.data}/>;
        }
    }

    render() {
        return (
            <div className="topic section">
                <NewTopic/>
                {this.renderTopicList()}
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
    };
};

export default withRouter<any>(connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic));