import { NotebookStore } from './Notebook';
import { TopicStore } from './Topic';

/**
 * 应用级Store
 * @export
 * @interface MarkStore
 */
export interface MarkStore{
    notebook: NotebookStore;
    topic: TopicStore;
}

