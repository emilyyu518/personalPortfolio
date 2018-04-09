import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/index';
import Home from './components/home/index';
import About from './components/about/index';
import Portfolio from './components/work/index';
import Contact from './components/contact/index';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
