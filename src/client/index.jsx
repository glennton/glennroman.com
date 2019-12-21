import React from 'react';
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App'
import theme from './theme'

const render = Component => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router>
        <Component />
      </Router>          
    </MuiThemeProvider>
    ,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App', () => { render(App) });
}