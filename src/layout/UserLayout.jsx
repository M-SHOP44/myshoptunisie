import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000">
          M-SHOP
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const UserLayout = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
         M-SHOP
        </Typography>
        <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <Button color="secondary">Signup</Button>
        <Button color="secondary">Login</Button>
      </Toolbar>
    </AppBar>
    <AppBar position="static"color="secondary">
      <Toolbar>
      <Stack direction="row" spacing={5} margin={"0 auto"}>
      <Link href="#" underline="none">
       {'Canapé'}
      </Link>
      <Link href="#" underline="none">
       {'Table'}
      </Link>
      <Link href="#" underline="none">
       {'Chaise'}
      </Link>
      <Link href="#" underline="none">
       {'Lit'}
      </Link>
      <Link href="#" underline="none">
       {'Bibliotheque'}
      </Link>
      <Link href="#" underline="none">
       {'Tapie'}
      </Link>
      <Link href="#" underline="none">
       {'Luminaire'}
      </Link>
      <Link href="#" underline="none">
       {'Bureau'}
      </Link>
    </Stack>
      </Toolbar>
    </AppBar>
    <Box
        component="footer"
        sx={{
          py:20,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
  </Box> 
  )
}

export default UserLayout