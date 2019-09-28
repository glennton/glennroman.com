import React, { Suspense, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import { hot } from 'react-hot-loader'
import { withStyles } from '@material-ui/core/styles'
import LogoIcon from '../../assets/svg/LogoIcon'
import './styles.scss';

import compose from 'recompose/compose'
import { borderBottom } from '@material-ui/system';

const styles = theme => ({
  mainLogo: {
    maxWidth: '60%',
    display: 'block',
    margin: '0 auto'
  },
  mainContainer: {
    width: '100vw',
    height: '100vh',
    paddingTop: theme.spacing.unit * 5
  },
  logoContainer: {
    height: '100vh',
  },
  introContainer: {
    paddingTop: theme.spacing.unit * 2
  },
  linkContainer: {
    paddingTop: theme.spacing.unit,
    '& a' : {
      display: 'block',
      padding: theme.spacing.unit,
      border: '1px solid #fff',
      marginBottom: theme.spacing.unit,
      '&:hover': {
        background: '#fff',
        color: '#000'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'inline',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        padding: `0 ${theme.spacing.unit}px`,
        '&:last-child': {
          borderRight: 0
        }
      }
    },
    'span': ""
  }
})

const App = (props) => {
  const { classes } = props
  const renderApp = (
    <Grid container direction="row" className={classes.mainContainer}>
      <Grid item xs="2" sm="2" md="3" lg="4"/>
      <Grid item xs="8" sm="8" md="5" lg="4">
        <Grid container direction="row" justify="flex-between" className={classes.logoContainer}>
          <Grid item xs="12"/>
          <Grid item xs="12">
            <LogoIcon className={classes.mainLogo}/>
            <Typography variant="body1" gutterBottom align="center" className={classes.introContainer}>
              Welcome to my page! Apologies for the lack of content, I am currently working on a new iteration of my site. In the mean time, you can learn more about me and connect with me through the links below.
              <br />
              <br />
              Thanks!
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom align="center" className={classes.linkContainer}>
              <Link href={'/portfolio/'} >2011 Personal Site</Link>
              <Link href={'/resume/resume-public.pdf'} >Resume</Link>
              <Link href={'https://www.linkedin.com/in/glenn-roman-08670721/'} >LinkedIn</Link>
              <Link href={'//github.com/glennton'} >Github</Link>
              <Link href={'mailto:create@glennroman.com'} >Contact</Link>
            </Typography>

          </Grid>
          <Grid item xs="12" />
        </Grid>
      </Grid>
      <Grid item xs="2" sm="2" md="3" lg="4"/>
    </Grid>
  )
  return renderApp
}

export default compose(
  hot(module),
  withStyles(styles)
)(App)