import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/index';
import Home from './components/home/index';
import About from './components/about/index';
import Portfolio from './components/work/index';
import Contact from './components/contact/index';
import Footer from './components/nav/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronIndex: 0,
    };
    this.generateRandomIndex = this.generateRandomIndex.bind(this);
  }
  generateRandomIndex() {
    const index = Math.floor(Math.random() * 4);
    this.setState({ jumbotronIndex: index });
  }
  render() {
    const { jumbotronIndex } = this.state;
    const homeProps = { jumbotronIndex };
    return (
      <div>
        <NavBar generateRandomIndex={this.generateRandomIndex} />
        <main>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} {...homeProps} />} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
