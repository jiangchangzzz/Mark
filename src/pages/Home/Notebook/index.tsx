import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.scss';
import Back from '../../../components/Back';
import NewNotebook from '../../../components/NewNotebook';
import NotebookList from '../../../components/NotebookList';
import { NotebookStore, MarkStore } from '../../../types';
import * as notebookAction from '../../../actions/notebook';

interface NotebookProps{
    notebook: NotebookStore
    notebookAction: any
}

class Notebook extends React.Component<NotebookProps,any> {
    componentDidMount(){
        this.props.notebookAction.getNotebook();
    }

    render() {
        const {notebook,notebookAction}=this.props;

        let info;
        if(notebook.isFetching){
            info='加载中...';
        }
        else if(notebook.error){
            info=notebook.error;
        }

        return (
            <div className="notebook section">
                <Back/>
                <NewNotebook postNotebook={notebookAction.postNotebook}/>
                <p className="notebook-info">{info}</p>
                <NotebookList notebook={notebook} putNotebook={notebookAction.putNotebook} deleteNotebook={notebookAction.deleteNotebook}/>
            </div>
        );
    }
}

const mapStateToProps=(state: MarkStore)=>{
    return {
        notebook: state.notebook
    };
};

const mapDispatchToProps=(dispatch: Dispatch<MarkStore>)=>{
    return {
        notebookAction: bindActionCreators<any>(notebookAction,dispatch)
    }
} 

export default withRouter<any>(connect(
    mapStateToProps,
    mapDispatchToProps
)(Notebook));