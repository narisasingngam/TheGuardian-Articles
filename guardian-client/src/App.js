import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList'
import Details from './components/Details'
import Default from './components/Default'


export class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ArticlesList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route component={Default}></Route>
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
