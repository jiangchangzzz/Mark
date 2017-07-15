import * as React from 'react';
import NotebookForm from '../NotebookForm';
import './style.scss';

interface NewNotebookProps{
    postNotebook: any
}

interface NewNotebookState{
    isFormShow: boolean;//是否显示表单
    fetchInfo: string;
}

class NewNotebook extends React.Component<NewNotebookProps,NewNotebookState> {
    constructor(props: NewNotebookProps){
        super(props);
        this.state={
            isFormShow: false,
            fetchInfo: ''
        };
    }

    toggleForm=()=>{
        this.setState((prevState)=>({
            isFormShow: !prevState.isFormShow
        }));
    }

    submitForm=(name: string)=>{
        this.props.postNotebook(name);
        this.toggleForm();
    }

    render() {
        const {isFormShow, fetchInfo}=this.state;
        return (
            <div className="new-notebook">
                <div className="note-link">
                    <span className="note-new" onClick={this.toggleForm}><i className="icon-plus"></i>新建文集</span>
                    <span className="note-info">{fetchInfo}</span>
                </div>
                {isFormShow && <NotebookForm onSubmit={this.submitForm} onCancel={this.toggleForm}/>}
            </div>
        );
    }
}

export default NewNotebook;