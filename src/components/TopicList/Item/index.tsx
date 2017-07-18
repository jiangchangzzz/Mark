import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import { Topic } from '../../../types';

interface TopicItemProps {
    topic: Topic;
}

interface TopicItemState {
    isShowTool: boolean;
}

class TopicItem extends React.Component<TopicItemProps, TopicItemState> {
    constructor(props: TopicItemProps) {
        super(props);
        this.state = {
            isShowTool: false
        };
    }

    toggleTool = () => {
        this.setState(state => ({
            isShowTool: !state.isShowTool
        }));
    }

    render() {
        const { topic } = this.props;
        const { isShowTool } = this.state;
        return (
            <li className="topic-item">
                <NavLink to={`/notebook/${topic.notebook}/topic/${topic._id}`} activeClassName="active" className="item-link">
                    <div className="item-icon"><i className="icon-book"></i></div>
                    <div className="item-text">
                        <h3>{topic.title}</h3>
                        <p>{topic.summary}</p>
                    </div>
                </NavLink>
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

export default TopicItem;