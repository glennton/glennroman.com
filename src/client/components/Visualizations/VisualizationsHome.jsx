import React, { Suspense } from 'react';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { hot } from 'react-hot-loader'
import { makeStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom';

import compose from 'recompose/compose'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  }
}))

const VisualizationsHome = (props) => {
  const classes = useStyles()
  const renderApp = (
    <Grid container direction="row" className={classes.mainContainer}>
      <Typography>Test</Typography>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/visualizations' component={VisualizationsHome} /> */}
        </Suspense>
      </Switch>
    </Grid>
  )
  return renderApp
}

VisualizationsHome.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default compose(
  hot(module),
)(VisualizationsHome)