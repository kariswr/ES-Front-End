import React from 'react';
import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/questions" component={Questions} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
