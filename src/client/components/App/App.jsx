import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { hot } from 'react-hot-loader'
import { makeStyles } from '@material-ui/core/styles'
import './styles.scss';
import compose from 'recompose/compose'

import Home from '../Home/Home'
import VisualizationsHome from '../Visualizations/VisualizationsHome'
const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    paddingTop: theme.spacing(5)
  }
}))

const App = (props) => {
  const classes = useStyles()
  const renderApp = (
    <Grid container direction="row" className={classes.mainContainer}>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Home} />
          <Route path='/visualizations' render={(props) => <VisualizationsHome {...props} />} />
        </Suspense>
      </Switch>
    </Grid>
  )
  return renderApp
}

export default compose(
  hot(module),
)(App)

