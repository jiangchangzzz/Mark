import * as React from 'react';
import NotebookForm from '../NotebookForm';
import './style.scss';

interface NotebookItemProps {
    name: string;
    isActive: boolean;
    putNotebook: any,
    key: string;
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

    submitForm=(name: string)=>{
        this.props.putNotebook(this.props.key,name)
    }

    render() {
        const { name, isActive } = this.props;
        const { isShowSelect,isShowForm } = this.state;
        return (
            <li className={'note-item ' + (isActive ? 'active' : '')}>
                <p className="item-name">{name}</p>
                <div className="item-setting" onClick={this.toggleSelect}><i className="icon-cog"></i></div>
                {isShowSelect &&
                    <ul className="item-select">
                        <li onClick={()=>this.showForm(true)}><i className="icon-edit"></i>修改文集名</li>
                        <li><i className="icon-trash"></i>删除文集</li>
                    </ul>}
                {isShowForm && <NotebookForm prevName={name} onSubmit={this.submitForm} onCancel={()=>this.showForm(false)}/>}
            </li>
        )
    }
}

export default NotebookItem;