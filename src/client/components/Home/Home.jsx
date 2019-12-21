import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import { hot } from 'react-hot-loader'
import { makeStyles } from '@material-ui/core/styles'
import LogoIcon from '../../assets/svg/LogoIcon'

import compose from 'recompose/compose'

const useStyles = makeStyles(theme => ({
  mainLogo: {
    maxWidth: '60%',
    display: 'block',
    margin: '0 auto'
  },
  mainContainer: {
    width: '100vw',
    height: '100vh',
    paddingTop: theme.spacing(5)
  },
  logoContainer: {
    height: '100vh',
  },
  introContainer: {
    paddingTop: theme.spacing(2)
  },
  linkContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    '& a' : {
      display: 'block',
      padding: theme.spacing(1),
      border: '1px solid #fff',
      marginBottom: theme.spacing(1),
      '&:hover': {
        background: '#fff',
        color: '#000'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'inline',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        padding: `0 ${theme.spacing(1)}px`,
        '&:last-child': {
          borderRight: 0
        }
      }
    },
    'span': ""
  }
}))

const App = (props) => {
  const classes = useStyles()
  const renderApp = (
    <Grid container direction="row" className={classes.mainContainer}>
      <Grid item xs={2} sm={2} md={3} lg={4} />
      <Grid item xs={8} sm={8} md={6} lg={4}>
        <Grid container direction="row" justify="space-between" className={classes.logoContainer}>
          <Grid item xs={12} />
          <Grid item xs={12} >
            <LogoIcon className={classes.mainLogo}/>
            <Typography variant="body1" gutterBottom align="center" className={classes.introContainer}>
              Hi! My name is Glenn. I am a front-end web developer based in sunny Santa Clara, California. My passion lies in learning to be awesome in whatever I do. I am determined in my work, and at my core I am adventurous, creative, and open-minded.
              <br />
              <br />
              Apologies for the lack of content, I am currently working on a new iteration of my site. In the meantime, you can learn more about me and connect with me through the links below.
              <br />
              <br />
              Thanks!
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom align="center" className={classes.linkContainer}>
              <Link href={'/portfolio/'} >2011 Personal Site</Link>
              <Link href={'/resume/resume-public.pdf'} >Resume</Link>
              <Link href={'https://www.linkedin.com/in/glenn-roman-08670721/'} >LinkedIn</Link>
              <Link href={'//github.com/glennton'}>Github</Link>
              <Link href={'mailto:create@glennroman.com'} >Contact</Link>
            </Typography>

          </Grid>
          <Grid item xs={12} />
        </Grid>
      </Grid>
      <Grid item xs={2} sm={2} md={3} lg={4} />
    </Grid>
  )
  return renderApp
}

export default compose(
  hot(module),
)(App)