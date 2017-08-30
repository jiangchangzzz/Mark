import * as React from 'react';
import './style.scss';
import { Topic } from '../../types/Topic';

interface EditorProps {
    topic: Topic;
}

interface EditorState {
    title: string;
    content: string;
}

class Editor extends React.Component<EditorProps, EditorState> {
    changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        });
    }

    changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        const { topic } = this.props;
        return (
            <form className="editor">
                <div className="editor-title">
                    <input type="text" onChange={this.changeTitle} value={topic.title} />
                </div>
                <div className="editor-tool">

                </div>
                <div className="editor-content">
                    <textarea onChange={this.changeContent} value={topic.content} />
                </div>
            </form>
        );
    }
}

export default Editor;