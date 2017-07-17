/**
 * NotebookStore
 * @export
 * @interface NotebookStore
 */
export interface NotebookStore{
    isFetching: boolean;
    data: Notebook[];
    error: string | null;
}

/**
 * 后端返回的文集类型
 * @export
 * @interface Notebook
 */
export interface Notebook{
    _id: string;
    name: string;
}