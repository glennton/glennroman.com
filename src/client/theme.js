import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});
const theme = createMuiTheme({
  palette: {  
    accent: {
      main: pink[50],
    },
    background: {
      light: defaultTheme.palette.grey[50],
      dark: defaultTheme.palette.grey[800],
      accent: pink[50],
    },
    border: {
      light: defaultTheme.palette.grey[300]
    },
    primary: {
      main: defaultTheme.palette.grey[50],
      light: defaultTheme.palette.grey[50]
    },
  },
  typography: {
    useNextVariants: true,
    h1: {
      color: 'inherit',
      fontSize: '1.25em',
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.05em',
      lineHeight: '3em',
    },
    h2: {
      color: 'inherit',
      fontSize: '1em',
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.05em',
      lineHeight: '3em',
    },
    h3: {
      color: 'inherit',
      fontSize: '1em',
      textTransform: 'none',
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '3em',
    },
    h4: {
      color: 'inherit',
      textTransform: "uppercase",
      fontWeight: 600,
      letterSpacing: ` 0.15em`
    },
    h5: {
      color: 'inherit',
      textTransform: "uppercase",
      fontWeight: 600,
      letterSpacing: ` 0.15em`
    },
    h6: {
      color: 'inherit',
      fontWeight: 400,
      letterSpacing: ` 0.05em`
    },
    display1: { color: 'inherit' },
    display2: { color: 'inherit' },
    display3: { color: 'inherit' },
    display4: { color: 'inherit' },
    subtitle1: { color: 'inherit' },
    subtitle2: {color: 'inherit'},
    body1Next: {color: 'inherit'},
    body2Next: {color: 'inherit'},
    buttonNext: {color: 'inherit'},
    captionNext: {color: 'inherit'},
    overline: {color: 'inherit'},
    button: {color: 'inherit'},
    caption: {color: 'inherit', textTransform: 'none'},
    body1: {color: 'inherit'},
    body2: {color: 'inherit'},
    subheading: {color: 'inherit'},
    title: {color: 'inherit'},
    headline: {color: 'inherit'},
  },
});

export default theme