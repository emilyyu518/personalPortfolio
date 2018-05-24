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
      messageNotReady: true,
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
      if (!isValidated) {
        return false;
      }
      return this.validateInput(input, null);
    }, true);
    this.setState({ messageNotReady: !validated });
    return validated;
  }

  sendMessage(event) {
    const { sender, subject, text } = this.state;
    const message = { sender, subject, text };
    console.dir(message);

    event.preventDefault();

    if (this.validateAll()) {
      axios.post('/api/contact', message)
        .then((response) => {
          console.log(response);
          this.setState({ sent: true });
        })
        .catch((error) => {
          console.error('error getting response', error);
          this.setState({ sendError: true });
        });
    }
  }

  render() {
    const { sender, subject, text, errors, messageNotReady } = this.state;
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

                <input type="submit" value="talk to me!" className="submit-button" disabled={errors.sender || errors.subject || errors.text || messageNotReady} />
              </form>
            </div>
          </TextContainer>
        </div>
      </div>
    );
  }
}

export default Contact;
