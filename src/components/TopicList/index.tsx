import * as React from 'react';
import './style.scss';
import TopicItem from './Item';
import { Topic } from '../../types';

interface TopicListProps {
    topics: Topic[]
}

class TopicList extends React.Component<TopicListProps, any> {
    render() {
        const { topics } = this.props;
        return (
            <div className="topic-list">
                <ul>
                    {topics.map(topic => (
                        <TopicItem key={topic._id} topic={topic} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TopicList;