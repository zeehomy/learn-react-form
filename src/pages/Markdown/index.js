import React from 'react';
import marked from 'marked';
import 'github-markdown-css';
import './style.scss';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  render() {
    const html = marked(this.state.markdown);
    return (
      <div className="markdown">
        <div className="toolbar">
          <button className="button is-small">
            <span className="icon is-small">
              <i className="iconfont icon-editor-bold" />
            </span>
          </button>
          <button className="button is-small">
            <span className="icon is-small">
              <i className="iconfont icon-editor-italic" />
            </span>
          </button>
          <button className="button is-small">
            <span className="icon is-small">
              <i className="iconfont icon-editor-underline" />
            </span>
          </button>
          <button className="button is-small">
            <span className="icon is-small">
              <i className="iconfont icon-editor-list-bulleted" />
            </span>
          </button>
        </div>
        <div className="body box">
          <div className="editor">
            <textarea className="textarea" value={this.state.markdown} 
              onChange={e => this.onFieldChange('markdown', e)} />
          </div>
          <div className="preview markdown-body" dangerouslySetInnerHTML={{ __html: html }}>
          </div>
        </div>
      </div>
    )
  }

  onFieldChange(name, e) {
    this.setState({ [name]: e.target.value });
  }
}

export default Markdown;