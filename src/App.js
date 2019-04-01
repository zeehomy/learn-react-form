import React, { Component } from 'react';
import 'bulma';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div className="myform">
        <div className="title">from</div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" 
              value={this.state.name}
              onChange={e => this.onFieldChange(e)} />
          </div>
        </div>
      </div>
    );
  }

  onFieldChange(e) {
    const value = e.target.value;
    this.setState({ name: value });
  }
}

export default App;
