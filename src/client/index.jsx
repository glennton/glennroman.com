import React from 'react';
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './components/App/App'
import theme from './theme'

const render = Component => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Component />
    </MuiThemeProvider>
    ,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App', () => { render(App) });
}