import * as React from 'react';
import './style.scss';

interface NotebookFormProps{
    onSubmit: (name: string)=>void;
    onCancel: ()=>void;
    prevName?: string;
}

interface NotebookFormState{
    name: string;
    info: string;
}

class NotebookForm extends React.Component<NotebookFormProps,NotebookFormState> {
    constructor(props: NotebookFormProps){
        super(props);
        this.state={
            name: this.props.prevName || '',
            info: ''
        };
    }

    componentDidMount(){
        (this.refs.nameInput as HTMLInputElement).focus();
    }

    changeName=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            name: e.target.value
        });
    }

    SubmitForm=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const {name}=this.state;
        if(name.length===0){
            this.setState({
                info: '文集名称是必须的'
            });
            (this.refs.nameInput as HTMLInputElement).focus();
            return;
        }

        const {prevName}=this.props;
        if(prevName){
            if(name===prevName){
                this.setState({
                    info: '文集名称没有修改'
                });
                (this.refs.nameInput as HTMLInputElement).focus();
                return;
            }
        }

        this.props.onSubmit(this.state.name);
    }

    render() {
        const {onCancel}=this.props;
        const {name,info}=this.state;
        return (
            <form className="note-form" onSubmit={this.SubmitForm}>
                <div className="form-group">
                    <input type="text" className="form-input" onChange={this.changeName} value={name} ref="nameInput" placeholder="请输入文集名..." />
                </div>
                <div className="note-group">
                    <button type="submit" className="form-submit">提交</button>
                    <button type="button" className="form-cancel" onClick={()=>onCancel()}>取消</button>
                    <span className="form-info">{info}</span>
                </div>
            </form>
        );
    }
}

export default NotebookForm;