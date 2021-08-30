import React from 'react';
import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import About from './components/About';
import Help from './components/Help';
import {Route, Switch} from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
        </Switch>
      </div>
    );
  }
}
export default App;
