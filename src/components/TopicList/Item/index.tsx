import * as React from 'react';
import { Link,withRouter } from 'react-router-dom';
import './style.scss';
import { Topic } from '../../../types';

interface TopicItemProps{
    topic: Topic;
    match: any;
}

interface TopicItemState{
    isShowTool: boolean;
}

class TopicItem extends React.Component<TopicItemProps, TopicItemState> {
    constructor(props: TopicItemProps){
        super(props);
        this.state={
            isShowTool: false
        };
    }

    toggleTool=()=>{
        this.setState(state=>({
            isShowTool: !state.isShowTool
        }));
    }

    render() {
        const {topic,match}=this.props;
        const {isShowTool}=this.state; 
        let topicId=match.params.topicid;

        return (
            <li className={'topic-item ' + (topic._id===topicId?'active':'') }>
                <Link to={`/notebook/${topic.notebook}/topic/${topic._id}`}>
                    <div className="item-icon"><i className="icon-book"></i></div>
                    <div className="item-text">
                        <h3>{topic.title}</h3>
                        <p>{topic.summary}</p>
                    </div>
                </Link>
                <div className="item-setting">
                    <div className="setting-icon" onClick={this.toggleTool}>
                        <i className="icon-cog"></i>
                    </div>
                    {isShowTool && <ul className="setting-select">
                        <li><i className="icon icon-folder-open"></i>移动文章</li>
                        <li><i className="icon icon-trash-o"></i>删除文章</li>
                    </ul>}
                </div>
            </li>
        );
    }
}

export default withRouter<any>(TopicItem);