import React from 'react';

class MailchimpForm extends React.Component {
  state = {
    value: '',
    successfulSubscription: false,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.setState({
      value: '',
      successfulSubscription: true,
    });

    // if successful add a tooltip that say thank you. 
  }

  render() {
    return (
      <div>
        <form className="validate newsletter__form" action="https://andri.us19.list-manage.com/subscribe/post?u=5ebc7fccef0f802cd7905e830&amp;id=89f83a1d98" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <input className="email newsletter__email-input" type="email" value={this.state.value} onChange={this.handleChange} name="EMAIL" id="mce-EMAIL" placeholder="Level up your dev skills!" required />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_5ebc7fccef0f802cd7905e830_89f83a1d98" tabIndex="-1" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="clear">
            <button className="button newsletter__submit-button" value="Subscribe" name="subscribe" onSubmit={this.handleSubmit}>
              <img className="newsletter__submit-button-arrow" src="static/icon-arrow-up.svg" />
            </button>
          </div>
        </form>

        <style jsx>{`
          .newsletter__form {
            display: flex;
            justify-content: center;
          }
          
          .newsletter__email-input {
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

export default MailchimpForm;