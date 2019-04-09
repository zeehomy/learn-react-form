import React from 'react';
import marked from 'marked';
import './style.scss';

const App = () => (
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
        <textarea className="textarea" />
      </div>
      <div className="preview">
      </div>
    </div>
  </div>
)

export default App;