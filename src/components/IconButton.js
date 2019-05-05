import React from 'react';

function IconButton(props) {
  const icon = props.icon;
  return (
    <button className="button is-small" onClick={props.onClick}>
      <span className="icon is-small">
        <i className={`iconfont ${icon}`} />
      </span>
    </button>
  )
}

export default IconButton;