import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';

class App extends React.Component {
  render(){
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} />
                    <Route path="/questions" component={Questions} />
            </Switch>
        </div>
        
      </HashRouter>
    );
  }
}
export default App;
