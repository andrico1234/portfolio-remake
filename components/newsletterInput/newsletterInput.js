import React from 'react';

class NewsletterInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('e', e);
  }

  onChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div className="newsletter">
        <form onSubmit={this.onSubmit}>
          <input 
            className="newsletter__text-input"
            onChange={this.onChange}
            placeholder="Level up your dev skills!" 
            type="text"
          />
          <button className="newsletter__submit-button" type="submit">
            <img className="newsletter__submit-button-arrow" src="static/icon-arrow-up.svg"/>
          </button>
        </form>

        <style jsx>{`
          .newsletter__text-input {
            border: 1px solid white;
            border-right: none;
            color: black;
            cursor: pointer;
            height: 19px;
            padding: 12px 8px;
            position: relative;
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
