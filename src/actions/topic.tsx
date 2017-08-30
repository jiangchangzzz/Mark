import { TopicAction } from '../constants/actionType';
import { USERID } from '../constants/config';
import { parseQuery } from '../utils';

const topicUrl = 'topic';

/**
 * 获取文集中所有的文章
 */
export const getTopics = (notebookId) => {
    return {
        url: parseQuery(topicUrl,{
            notebookid: notebookId,
            userid: USERID
        }),
        option: { method: 'GET' },
        types: [
            TopicAction.GET_TOPICS_START,
            TopicAction.GET_TOPICS_SUCCESS,
            TopicAction.GET_TOPICS_FAILURE
        ],
        notebookId: notebookId
    }
}

/**
 * 当redux中不存在当前文集中的文章时才拉取数据
 * @param notebookId
 */
export const getTopicsIfNeeded = (notebookId) => {
    return (dispatch, getState) => {
        const topic = getState().topic[notebookId];
        if (!topic || topic.error) {
            dispatch(getTopics(notebookId));
        }
    }
}

