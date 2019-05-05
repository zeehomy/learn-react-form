import React from 'react';
import marked from 'marked';
import IconButton from 'components/IconButton';
import 'github-markdown-css';
import './style.scss';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const markdown = localStorage.getItem('markdownEditorValue');

    if (markdown) {
      this.setState({  markdown });
    }

    console.log(this.myRef.current);
  }

  render() {
    const html = marked(this.state.markdown);
    return (
      <div className="markdown">
        <div className="toolbar">
          <IconButton icon="icon-editor-bold" onClick={e => this.onBoldClick(e)} />
          <IconButton icon="icon-editor-italic" />
          <IconButton icon="icon-editor-underline" />
          <IconButton icon="icon-editor-list-bulleted" />
        </div>
        <div className="body box">
          <div className="editor">
            <textarea className="textarea" 
              value={this.state.markdown} 
              onChange={e => this.onFieldChange('markdown', e)}
              ref={this.myRef} />
          </div>
          <div className="preview markdown-body" dangerouslySetInnerHTML={{ __html: html }}>
          </div>
        </div>
      </div>
    )
  }

  onFieldChange(name, e) {
    this.setState({ [name]: e.target.value });
    localStorage.setItem('markdownEditorValue', e.target.value);
  }

  onBoldClick() {
    const txt = this.myRef.current;
    const start = txt.selectionStart;
    const end = txt.selectionEnd;

    let md = this.state.markdown;
    md = md.substring(0, start) + '**' + md.substring(start, end) + '**' + md.substring(end);

    this.setState({ markdown: md });
  }
}

export default Markdown;