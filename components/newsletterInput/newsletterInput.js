import React from 'react';
import { sendRequest } from '../../services/sendRequest';

class NewsletterInput extends React.Component {
  constructor() {
    super();

    this.state = {
      hasFormSubmitted: false,
      value: '',
    }
  }

  onSubmit = async e => {
    e.preventDefault();

    if (!this.state.value) {
      // check to see if valid email, if not add error state. 
      return null;
    }

    // add NProgress
    try {
      await this.subscribeToNewsletter(this.state.value);

      this.setState({
        hasFormSubmitted: true,
        value: '',
      });
    } catch (err) {
      this.setState({
        // error state
        value: 'err'
      })
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  subscribeToNewsletter = async email => {
    await sendRequest({
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      })
    });
  }

  render() {
    return (
      <div>
        <form className="newsletter__form" onSubmit={this.onSubmit}>
          <input
            className="newsletter__text-input"
            onChange={this.onChange}
            value={this.state.value}
            placeholder={this.state.hasFormSubmitted ? "Thank you!" : "Level up your dev skills!"}
            type="text"
          />
          <button className="newsletter__submit-button" type="submit">
            <img className="newsletter__submit-button-arrow" src="static/icon-arrow-up.svg" />
          </button>
        </form>

        <style jsx>{`
          .newsletter__form {
            display: flex;
            justify-content: center;
          }

          .newsletter__text-input {
            border: 1px solid white;
            border-right: none;
            color: black;
            cursor: text;
            height: 19px;
            padding: 12px 8px;
            top: -4px;
            width: 200px;
          }

          .newsletter__submit-button {
            background-color: #e8535b;
            border: 1px solid white;
            border-left: none;
            color: white;
            cursor: pointer;
            height: 45px;
            width: 45px;

            &:hover {
              background-color: #FF7B83;
            }

            &:active {
              background-color: #C33F47;
            }
          }

          .newsletter__submit-button-arrow {
            position: relative;
            transform: rotate(90deg);
            top: 2px;
            width: 24px;
          }
        `}</style>
      </div>
    )
  }
}

export default NewsletterInput;
