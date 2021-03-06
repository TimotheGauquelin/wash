import React from 'react';
import ReactDOM from 'react-dom';

//StyleSheets
import './index.css';

//Components
import App from './App';
import AvisPassageForm from './components/AvisPassageForm'


import reportWebVitals from './reportWebVitals';

//Route
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/avisdepassage' component={AvisPassageForm} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root></Root>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
