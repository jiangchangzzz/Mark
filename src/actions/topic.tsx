import { TopicAction } from '../constants/actionType';

const topicUrl='topic';

/**
 * 获取文集中所有的文章
 */
export const getTopics=(notebookId)=>{
    return {
        url: `${topicUrl}?notebookid=${notebookId}`,
        option: {method: 'GET'},
        types: [
            TopicAction.GET_TOPICS_START,
            TopicAction.GET_TOPICS_SUCCESS,
            TopicAction.GET_TOPICS_FAILURE
        ]
    }
}

/**
 * 获取文章详细信息
 */
export const getTopic=(id)=>{
    return {
        url: `${topicUrl}/${id}`,
        options: {method: 'GET'},
        types: [
            TopicAction.GET_TOPIC_START,
            TopicAction.GET_TOPIC_SUCCESS,
            TopicAction.GET_TOPIC_FAILURE
        ]
    }
}

