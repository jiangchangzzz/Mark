import { Notebook } from './Notebook';
import { Topic } from './Topic';

export interface StoreState{
    notebook: DataStore<Notebook>;
    topic: DataStore<Topic>;
    editor: Topic
}

export class DataStore<T=any>{
    isFetching: boolean=false;
    data: T[]=[];
    error: string | null=null;
}

