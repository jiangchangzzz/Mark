import { DataStore, Notebook } from '../types';
import { NotebookAction } from '../constants/actionType';

const initialState=new DataStore<Notebook>();

const notebook=(state=initialState,action)=>{
    switch(action.type){
        //获取数据
        case NotebookAction.GET_NOTEBOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: null
            };

        //新增数据
        case NotebookAction.POST_NOTEBOOK_SUCCESS:
            return {
                data: [action.payload,...state.data],
                isFetching: false,
                error: null
            }

        //删除数据
        case NotebookAction.DELETE_NOTEBOOK_SUCCESS:
            return {
                data: state.data.filter(i=>i._id!==action.payload._id),
                isFetching: false,
                error: null
            };

        //修改文集名称
        case NotebookAction.PUT_NOTEBOOK_SUCCESS:
            return {
                data: state.data.map(i=>{
                    if(i._id===action.payload._id){
                        return action.payload;
                    }
                    return i;
                }),
                isFetching: false,
                error: null
            };

        case NotebookAction.GET_NOTEBOOK_START:
        case NotebookAction.POST_NOTEBOOK_START:
        case NotebookAction.DELETE_NOTEBOOK_START:
        case NotebookAction.PUT_NOTEBOOK_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };

        case NotebookAction.GET_NOTEBOOK_FAILURE:
        case NotebookAction.POST_NOTEBOOK_FAILURE:
        case NotebookAction.DELETE_NOTEBOOK_FAILURE:
        case NotebookAction.DELETE_NOTEBOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        default: 
            return state;
    }
};

export default notebook;