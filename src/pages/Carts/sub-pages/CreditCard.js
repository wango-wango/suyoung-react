import React from 'react';
import Card from 'react-credit-cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Credit-Card.scss';


import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './utils';

import 'react-credit-cards/es/styles-compiled.css';


export default class App extends React.Component {
  

  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  };


  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }
    
    //console.log(this.props)
    this.props.setInputs({...this.props.inputs, [target.name]: target.value})

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render(props) {
    const { name, number, expiry, cvc, focused, issuer} = this.state;
    const {handleSubmit} = this.props;
    return (
      <div key="Payment">
        <div className="App-payment">
          <div className="card_flex">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
            <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  placeholder="卡號"
                  pattern="[\d| ]{16,22}"
                  maxLength="19"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="姓名"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="卡片背後三碼"
                    maxLength="3"
                    pattern="\d{3,4}"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </div>
              <input type="hidden" name="issuer" value={issuer} />
              <div className="form-actions submit">
                <button className="btn" onClick={handleSubmit} >送出</button>
              </div>
            </form>
          </div>
          {/* {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    );
  }
}
