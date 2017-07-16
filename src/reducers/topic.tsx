import { DataStore, Topic } from '../types';
import { TopicAction } from '../constants/actionType';

const initialState=new DataStore<Topic>();

const topic=(state=initialState,action)=>{
    switch(action.type){
        case TopicAction.GET_TOPICS_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case TopicAction.GET_TOPICS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: null
            };
        case TopicAction.GET_TOPICS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case TopicAction.GET_TOPIC_SUCCESS:
            return {
                data: state.data.map(i=>{
                    if(i._id===action.payload._id){
                        return action.payload;
                    }
                    return i;
                }),
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }  
};

export default topic;