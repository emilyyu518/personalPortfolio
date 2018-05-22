import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';
import TextContainer from '../all-purpose/text-container';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      subject: '',
      text: '',
      errors: {
        sender: false,
        subject: false,
        text: false,
      },
      sendError: false,
      sent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateInput(name);
    });
  }

  validateInput(name) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === 'sender' && !emailRegex.test(this.state.sender)) {
      this.setState({ errors: { ...this.state.errors, sender: true } });
      return true;
    } else if (!this.state[name].length) {
      this.setState({ errors: { ...this.state.errors, [name]: true } });
      return true;
    }
    return false;
  }

  sendMessage() {
    const { sender, subject, text } = this.state;
    const inputs = ['sender', 'subject', 'text'];

    axios.post('/api/contact', { sender, subject, text })
      .then((response) => {
        console.log(response);
        this.setState({ sent: true });
      })
      .catch((error) => {
        console.error('error getting response', error);
        this.setState({ sendError: true });
      });
  }

  render() {
    const { sender, subject, text, errors } = this.state;
    const invalidText = { borderBottom: '2pt solid red' };
    const invalidTextarea = { border: '2pt solid red' };
    const invalidTextLabel = { color: 'red' };

    return (
      <div>
        <div className="row about-heading-container">
          <div className="about-heading">
            <Heading text="say hello!" pattern="Triangles" />
          </div>
        </div>
        {/* <Jumbotron text="Coming soon..." jumbotronIndex={1} /> */}
        <div className="form-container">
          <TextContainer pattern="Dots">
            <div>
              <form onSubmit={this.sendMessage} className="col message-form">
                <input
                  type="email"
                  id="sender"
                  name="sender"
                  value={sender}
                  onChange={this.handleChange}
                  placeholder="your_name@example.com"
                  className="text-input"
                  style={errors.sender ? invalidText : null}
                />
                <label htmlFor="sender" className="text-label" style={errors.sender && invalidTextLabel}>
                  {errors.sender ? 'please enter a valid email address' : 'your email address'}
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={this.handleChange}
                  placeholder="Just saying hi!"
                  className="text-input"
                  style={errors.subject ? invalidText : null}
                />
                <label htmlFor="subject" className="text-label">
                  {errors.subject ? 'please enter a subject for your message' : 'subject'}
                </label>

                <textarea
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                  placeholder="I'd like to talk about..."
                  className="textarea-input"
                  style={errors.text ? invalidTextarea : null}
                />

                <input type="submit" value="talk to me!" className="submit-button" />
              </form>
            </div>
          </TextContainer>
        </div>
      </div>
    );
  }
}

export default Contact;
