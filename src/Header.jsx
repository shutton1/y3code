import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Link } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  typographyStyle: {
    flex: 1,
  },
  iconStyle: {
    flex: 1
  },
  logo: {
    height: 40,
    width: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: 'solid',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid item container xs={5} sm={2} direction="row">
          <ShoppingCartIcon></ShoppingCartIcon>
        </Grid>
        <Grid item sm={1} xs={1} /> {/* مساحة فارغة(empty space) */}
        <Grid item container sm={9} xs={6} direction="row-reverse" justify="center" alignItems="center">
          <img
            src={require('./ebay-logo.png')}
            className={classes.logo}
            alt="logo"
          />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Typography>
            <Link href="#" onClick={() => {
              console.info("sign in")
            }}>
              تسجيل الدخول
            </Link>
          </Typography>
          <Typography className={classes.typographyStyle}>عروض اليوم</Typography> {/* Daily deals */}
          <Typography className={classes.typographyStyle}>المساعدة</Typography> {/* Help */}
          <Typography className={classes.typographyStyle}>يبيع</Typography> {/* Sell */}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header;