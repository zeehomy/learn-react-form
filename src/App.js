import React, { Component } from 'react';
import 'bulma';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: '',
        subject: '',
        agree: false,
        statemanage: "redux",
      },
      errors: { }
    };
  }

  render() {
    const formData = this.state.formData;
    const errors = this.state.errors;
    return (
      <div className="myform">
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="title">from</div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" 
                value={formData.name}
                onChange={e => this.onFieldChange('name', e)}
                onBlur={e => this.validataFeild('name')} />
            </div>
            {errors.name ? <p className="help is-danger">{errors.name}</p> : null}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email" 
                value={formData.email}
                onChange={e => this.onFieldChange('email', e)}
                onBlur={e => this.validataFeild('email')} />
            </div>
            {errors.email ? <p className="help is-danger">{errors.email}</p> : null}
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea" 
                value={formData.message}
                onChange={e => this.onFieldChange('message', e)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select value={formData.subject}
                  onChange={e => this.onFieldChange('subject', e)} >
                  <option value="">请选择</option>
                  <option value="react">React Js</option>
                  <option value='vue'>Vue Js</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" checked={formData.agree} 
                  onChange={e => this.onFieldChange('agree', e, 'checked')} />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="statemanage" value="redux"
                  checked={formData.statemanage === 'redux'}
                  onChange={e => this.onFieldChange('statemanage', e)} />
                Redux
              </label>
              <label className="radio">
                <input type="radio" name="statemanage" value="mobx"
                  checked={formData.statemanage === 'mobx'}
                  onChange={e => this.onFieldChange('statemanage', e)} />
                MobX
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text" type="reset">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  onFieldChange(feild, e, valueFeild) {
    let formData = this.state.formData
    const value = e.target[valueFeild || 'value'];
    formData[feild] = value;
    this.setState({ formData });
  }

  onSubmit(e) {
    e.preventDefault();
    
    if (!this.validataFeild()) {
      return;
    }

    console.log(this.state.formData);
  }

  validataName(formData) {
    if (!formData.name) {
      return '请输入名称！';
    } else {
      return null;
    }
  }

  validataEmail(formData) {
    const re = /^[-\w]+@[-\w]+(\.[-\w]+)+$/;
    if (formData.email && !re.test(formData.email)) {
      return '请正确输入Email！';
    } else {
      return null;
    }
  }

  validataFeild(field) {
    const formData = this.state.formData;
    const errors= this.state.errors;

    // if (!field || field === 'name') {
    //   if (!formData.name) {
    //     errors.name = '请输入名称！';
    //   } else {
    //     errors.name = null;
    //   }
    // }
    errors.name = this.validataName(formData);

    // if (!field || field === 'email') {
    //   const re = /^[-\w]+@[-\w]+(\.[-\w]+)+$/;
    //   if (formData.email && !re.test(formData.email)) {
    //     errors.email = '请正确输入Email！';
    //   } else {
    //     errors.email = null;
    //   }
    // }
    errors.email = this.validataEmail(formData);

    this.setState({ errors });          // this.setState()为异步执行。

    for (const key in errors) {
      if (errors[key]) {
        return false;
      }
    }

    return true;
  }
}

export default App;
