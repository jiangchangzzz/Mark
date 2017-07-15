import { Notebook } from './Notebook';

export interface StoreState{
    notebook: DataStore<Notebook>;
}

export class DataStore<T=any>{
    isFetching: boolean=false;
    data: T[]=[];
    error: string | null=null;
}

