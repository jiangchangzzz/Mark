import * as React from 'react';
// import Dialog from 'rc-dialog';

import './style.scss';
import NotebookItem from './Item';
import { NotebookStore } from '../../types'

interface NotebookListProps{
    notebook: NotebookStore,
    putNotebook: any,
    deleteNotebook: any
}

class NotebookList extends React.Component<NotebookListProps,any> {
    constructor(props: NotebookListProps){
        super(props);
    }

    render() {
        const {notebook,putNotebook,deleteNotebook}=this.props;
        return (
            <div>
                <ul className="note-list">
                    {notebook.data.map((item,index)=>(
                        <NotebookItem key={item._id} notebook={item} putNotebook={putNotebook} deleteNotebook={deleteNotebook}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NotebookList;