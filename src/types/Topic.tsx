/**
 * TopicStore
 */
export type TopicStore={
    [notebookId: string]: Topics
};

/**
 * 一个文集中的总的文章
 * @export
 * @interface Topics
 */
export interface Topics{
    isFetching: boolean;
    data: Topic[]
    error: string;
}

/**
 * 一篇文章
 * @export
 * @interface Topic
 */
export interface Topic{
    _id: string;
    title: string;
    content: string;
    summary: string;
    notebook?: string;
}