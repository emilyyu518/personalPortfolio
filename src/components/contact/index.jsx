import React from 'react';
import axios from 'axios';

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
      messageNotReady: true,
      sending: false,
      sendError: false,
      sent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateInput(name, () => this.validateAll());
    });
  }

  validateInput(name, cb) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name === 'sender' && !emailRegex.test(this.state.sender)) {
      this.setState({ errors: { ...this.state.errors, sender: true } }, cb);
      return false;
    } else if (name === 'sender' && emailRegex.test(this.state.sender)) {
      this.setState({ errors: { ...this.state.errors, sender: false } }, cb);
      return true;
    } else if (!this.state[name].length) {
      this.setState({ errors: { ...this.state.errors, [name]: true } }, cb);
      return false;
    }
    this.setState({ errors: { ...this.state.errors, [name]: false } }, cb);
    return true;
  }

  validateAll() {
    const inputs = ['sender', 'subject', 'text'];
    const validated = inputs.reduce((isValidated, input) => {
      const inputValidated = this.validateInput(input, null);
      if (!isValidated) {
        return false;
      }
      return inputValidated;
    }, true);
    this.setState({ messageNotReady: !validated });
    return validated;
  }

  sendMessage(event) {
    const { sender, subject, text } = this.state;
    const message = { sender, subject, text };

    event.preventDefault();

    if (this.validateAll()) {
      this.setState({ sending: true }, () => {
        axios.post('https://ylp7khqr95.execute-api.us-east-1.amazonaws.com/prod', message)
          .then((response) => {
            console.log(response);
            this.setState({
              sending: false,
              sent: true,
              sender: '',
              subject: '',
              text: '',
              messageNotReady: true,
            });
          })
          .catch((error) => {
            console.error('error getting response', error);
            this.setState({ sending: false, sendError: true });
          });
      });
    }
  }

  render() {
    const {
      sender,
      subject,
      text,
      errors,
      messageNotReady,
      sending,
      sent,
      sendError,
    } = this.state;
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
                  onBlur={() => this.validateInput('sender')}
                  placeholder="your_name@example.com"
                  className="text-input"
                  style={errors.sender ? invalidText : null}
                />
                <label htmlFor="sender" className="text-label" style={errors.sender ? invalidTextLabel : null}>
                  {errors.sender ? 'please enter a valid email address' : 'your email address'}
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={this.handleChange}
                  onBlur={() => this.validateInput('subject')}
                  placeholder="Just saying hi!"
                  className="text-input"
                  style={errors.subject ? invalidText : null}
                />
                <label htmlFor="subject" className="text-label" style={errors.subject ? invalidTextLabel : null}>
                  {errors.subject ? 'please enter a subject for your message' : 'subject'}
                </label>

                <textarea
                  id="text"
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                  onBlur={() => this.validateInput('text')}
                  placeholder="I'd like to talk about..."
                  className="textarea-input"
                  style={errors.text ? invalidTextarea : null}
                />
                <label htmlFor="text" className="textarea-label" style={errors.text ? invalidTextLabel : null}>
                  {errors.text ? 'please enter a body for your message' : 'your message'}
                </label>

                <div className="row submit-row">
                  <input type="submit" value="talk to me!" className="submit-button" disabled={errors.sender || errors.subject || errors.text || messageNotReady} />
                  {sending && (
                    <div className="send-status sending">
                      <span className="fas fa-paper-plane send-status-icon" aria-label="paper airplane" />
                      <span>sending...</span>
                    </div>
                  )}
                  {sent && (
                    <div className="send-status successful">
                      <span className="fas fa-smile send-status-icon" aria-label="smiley face" />
                      <span>successfully sent!</span>
                    </div>
                  )}
                  {sendError && (
                    <div className="send-status failed">
                      <span className="fas fa-frown send-status-icon" aria-label="frowning face" />
                      <span>sorry, there was an error.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </TextContainer>
        </div>
      </div>
    );
  }
}

export default Contact;
