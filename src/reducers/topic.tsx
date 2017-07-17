import { TopicStore } from '../types';
import { TopicAction } from '../constants/actionType';

const initialState: TopicStore={};

const topic=(state=initialState,action)=>{
    switch(action.type){
        case TopicAction.GET_TOPICS_START:
            return {
                ...state,
                [action.notebookId]: {
                    isFetching: true,
                    data: [],
                    error: null
                }
            };
        case TopicAction.GET_TOPICS_SUCCESS:
            return {
                ...state,
                [action.notebookId]: {
                    isFetching: false,
                    data: action.payload,
                    error: null
                }
            };
        case TopicAction.GET_TOPICS_FAILURE:
            return {
                ...state,
                [action.notebookId]: {
                    isFetching: false,
                    data: [],
                    error: action.error
                }
            };
        default:
            return state;
    }  
};

export default topic;