import * as React from 'react';
import NotebookForm from '../NotebookForm';
import './style.scss';

interface NewNotebookProps {
    postNotebook: any
}

interface NewNotebookState {
    isFormShow: boolean;//是否显示表单
}

class NewNotebook extends React.Component<NewNotebookProps, NewNotebookState> {
    constructor(props: NewNotebookProps) {
        super(props);
        this.state = {
            isFormShow: false
        };
    }

    toggleForm = () => {
        this.setState((prevState) => ({
            isFormShow: !prevState.isFormShow
        }));
    }

    submitForm = (name: string) => {
        this.props.postNotebook(name);
        this.toggleForm();
    }

    render() {
        const { isFormShow } = this.state;
        return (
            <div className="new-notebook">
                <div className="note-link">
                    <span className="note-new" onClick={this.toggleForm}><i className="icon-plus"></i>新建文集</span>
                </div>
                {isFormShow && <NotebookForm onSubmit={this.submitForm} onCancel={this.toggleForm} />}
            </div>
        );
    }
}

export default NewNotebook;