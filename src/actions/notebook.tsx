import { NotebookAction } from '../constants/actionType';

const userId = '594c86e5442a6c04280bcca7';
const notebookUrl = 'notebook';

/**
 * 获取文集
 */
export const getNotebook = () => {
    return {
        url: `${notebookUrl}?userid=${userId}`,
        option: { method: 'GET' },
        types: [
            NotebookAction.GET_NOTEBOOK_START,
            NotebookAction.GET_NOTEBOOK_SUCCESS,
            NotebookAction.GET_NOTEBOOK_FAILURE
        ]
    }
}

/**
 * 新增文集
 */
export const postNotebook = (name: string) => {
    return {
        url: notebookUrl,
        option: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                name: name
            })
        },
        types: [
            NotebookAction.POST_NOTEBOOK_START,
            NotebookAction.POST_NOTEBOOK_SUCCESS,
            NotebookAction.POST_NOTEBOOK_FAILURE
        ]
    }
}

/**
 * 删除文集
 */
export const deleteNotebook = (id: string) => {
    return {
        url: `${notebookUrl}/${id}`,
        option: {
            method: 'DELETE'
        },
        types: [
            NotebookAction.DELETE_NOTEBOOK_START,
            NotebookAction.DELETE_NOTEBOOK_SUCCESS,
            NotebookAction.DELETE_NOTEBOOK_FAILURE
        ]
    }
}

/**
 * 修改文集名称
 */
export const putNotebook = (id: string, name: string) => {
    return {
        url: `${notebookUrl}/${id}`,
        option: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        },
        types: [
            NotebookAction.PUT_NOTEBOOK_START,
            NotebookAction.PUT_NOTEBOOK_SUCCESS,
            NotebookAction.PUT_NOTEBOOK_FAILURE
        ]
    }
}