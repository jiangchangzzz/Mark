import * as React from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import NotebookForm from '../../NotebookForm';
import './style.scss';

interface NotebookItemProps {
    name: string;
    putNotebook: any,
    deleteNotebook: any,
    _id: string,
    history: any,
    match: any
}

interface NotebookItemState {
    isShowSelect: boolean;
    isShowForm: boolean;
}

class NotebookItem extends React.Component<NotebookItemProps, NotebookItemState>{
    constructor(props: NotebookItemProps) {
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
        this.props.putNotebook(this.props._id,name);
        this.showForm(false);
    }

    deleteNotebook=()=>{
        this.props.deleteNotebook(this.props._id);
        this.toggleSelect();
    }

    render() {
        const { name,_id,match } = this.props;
        const { isShowSelect,isShowForm } = this.state;
        const currentid=match.params.notebookid;
        return (
            <li className={'note-item ' + ( _id===currentid? 'active' : '')}>
                <NavLink to={`/notebook/${_id}`}><p className="item-name">{name}</p></NavLink>
                <div className="item-setting" onClick={this.toggleSelect}><i className="icon-cog"></i></div>
                {isShowSelect &&
                    <ul className="item-select">
                        <li onClick={()=>this.showForm(true)}><i className="icon icon-edit"></i>修改文集名</li>
                        <li onClick={this.deleteNotebook}><i className="icon icon-trash"></i>删除文集</li>
                    </ul>}
                {isShowForm && <NotebookForm prevName={name} onSubmit={this.putNotebook} onCancel={()=>this.showForm(false)}/>}
            </li>
        )
    }
}

export default withRouter<any>(NotebookItem);