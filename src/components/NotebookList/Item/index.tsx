import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import NotebookForm from '../../NotebookForm';
import { Notebook } from '../../../types'

interface NotebookItemProps {
    notebook: Notebook;
    putNotebook: any;
    deleteNotebook: any;
}

interface NotebookItemState {
    isShowSelect: boolean;
    isShowForm: boolean;
}

class NotebookItem extends React.Component<NotebookItemProps, NotebookItemState>{
    constructor(props) {
        super(props);
        this.state = {
            isShowSelect: false,
            isShowForm: false
        };
    }

    toggleSelect = () => {
        this.setState(prevState => ({
            isShowSelect: !prevState.isShowSelect
        }));
    }

    showForm=(isShow: boolean)=>{
        this.setState({
            isShowForm: isShow,
            isShowSelect: false
        });
    }

    putNotebook=(name: string)=>{
        this.props.putNotebook(this.props.notebook._id,name);
        this.showForm(false);
    }

    deleteNotebook=()=>{
        this.props.deleteNotebook(this.props.notebook._id);
        this.toggleSelect();
    }

    render() {
        const { notebook } = this.props;
        const { isShowSelect,isShowForm } = this.state;
        return (
            <li className="note-item">
                <div className="item-content">
                    <NavLink to={`/notebook/${notebook._id}`} activeClassName="active">
                        <p className="item-name">{notebook.name}</p>
                    </NavLink>
                    <div className="item-setting" onClick={this.toggleSelect}><i className="icon-cog"></i></div>
                    {isShowSelect &&
                        <ul className="item-select">
                            <li onClick={()=>this.showForm(true)}><i className="icon icon-edit"></i>修改文集名</li>
                            <li onClick={this.deleteNotebook}><i className="icon icon-trash"></i>删除文集</li>
                        </ul>}
                </div>
                {isShowForm && <NotebookForm prevName={name} onSubmit={this.putNotebook} onCancel={()=>this.showForm(false)}/>}
            </li>
        )
    }
}

export default NotebookItem;