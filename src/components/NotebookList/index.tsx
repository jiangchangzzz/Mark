import * as React from 'react';
import Dialog from 'rc-dialog';

import './style.scss';
import NotebookItem from '../NotebookItem';
import { DataStore, Notebook } from '../../types'

interface NotebookListProps{
    notebook: DataStore<Notebook>,
    putNotebook: any
}

class NotebookList extends React.Component<NotebookListProps,any> {
    constructor(props: NotebookListProps){
        super(props);
    }

    render() {
        const {notebook,putNotebook}=this.props;
        return (
            <div>
                <ul className="note-list">
                    {notebook.data.map((item,index)=>(
                        <NotebookItem key={item._id} name={item.name} isActive={true} putNotebook={putNotebook}/>
                    ))}
                </ul>
                <Dialog title="确认删除文集" visible>
                    <p>文集内的文章将会被移动到回收站</p>
                </Dialog>
            </div>
        );
    }
}

export default NotebookList;