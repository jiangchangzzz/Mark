import { DataStore, Notebook } from '../types';
import { NotebookAction } from '../constants/actionType';

const initialState=new DataStore<Notebook>();

const notebook=(state=initialState,action)=>{
    switch(action.type){
        //获取数据
        case NotebookAction.GET_NOTEBOOK_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case NotebookAction.GET_NOTEBOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: null
            };
        case NotebookAction.GET_NOTEBOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        //新增数据
        case NotebookAction.POST_NOTEBOOK_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case NotebookAction.POST_NOTEBOOK_SUCCESS:
            return {
                data: [action.payload,...state.data],
                isFetching: false,
                error: null
            }
        case NotebookAction.POST_NOTEBOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }

        //删除数据
        case NotebookAction.DELETE_NOTEBOOK_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };//TODO
        default: 
            return state;
    }
};

export default notebook;