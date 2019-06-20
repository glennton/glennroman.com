import React, { Suspense, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { hot } from 'react-hot-loader'
import { withStyles } from '@material-ui/core/styles'

import compose from 'recompose/compose'

const styles = theme => ({

})

const App = (props) => {
  const renderApp = (
    <Grid>
      <p>Test</p>
    </Grid>
  )
  return renderApp
}

export default compose(
  hot(module),
  withStyles(styles)
)(App)