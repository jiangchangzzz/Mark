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
    constructor(props: EditorProps) {
        super(props);

        this.state = {
            title: props.topic.title,
            content: props.topic.content
        };
    }

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
        const { title, content } = this.state;
        return (
            <form className="editor">
                <div className="editor-title">
                    <input type="text" onChange={this.changeTitle} value={title} />
                </div>
                <div className="editor-tool">

                </div>
                <div className="editor-content">
                    <textarea onChange={this.changeContent} value={content} />
                </div>
            </form>
        );
    }
}

export default Editor;