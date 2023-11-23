import { AppBar, Avatar, Box, Button, Container, IconButton, MenuItem, Menu, Link, Toolbar } from '@mui/material';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import AppLogo from '../assets/images/science.png';
import { HomeRounded, InfoRounded } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEle, setAnchorEle] = useState(null); // state to store the HTML element of menu when clicked
  const open = Boolean(anchorEle); // variable to store open and close state of menu

  // handle displaying the menu on clicking menu icon
  const handleMenuClick = (event) => {
    setAnchorEle(event.currentTarget);
  }

  // handle closing the menu
  const handleMenuClose = (_event) => {
    setAnchorEle(null);
  }

  return (
    <AppBar position='static' sx={{ backgroundColor: 'rgb(33, 40, 50)' }}>
      <Container maxWidth='xl' sx={{ paddingLeft: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 }, paddingRight: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 } }}>
        <Toolbar>
          {/* App Logo */}
          <Avatar src={AppLogo} alt='App-logo' />

          {/* Navbar Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} ml={4} >
            <Button sx={{ 
                color: 'white', 
                fontWeight: '600', 
                fontSize: '17px',
                '&:hover': {
                  color: '#b0bec5'
                }
              }}
            >
              <HomeRounded color='inherit' sx={{ pr: '7px', fontSize: '18px' }} />
              <Link 
                component={RouterLink}
                to='/'
                color='inherit' 
                variant='p' 
                underline='none' 
                textTransform='capitalize'
              >
                Home
              </Link>
            </Button>
            <Button sx={{ 
                color: 'white', 
                fontWeight: '600', 
                fontSize: '17px', 
                '&:hover': {
                  color: '#b0bec5'
                }
              }}
            >
              <InfoRounded color='inherit' sx={{ pr: '7px', fontSize: '18px' }} />
              <Link 
                component={RouterLink}
                to='/about'
                color='inherit' 
                variant='p' 
                underline='none' 
                textTransform='capitalize'
              >
                About
              </Link>
            </Button>
          </Box>

          {/* Navbar menu for screen size sm and below */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row-reverse' }}>
            <IconButton
              size="large"
              aria-label="menu icon for sm and below"
              aria-controls={open ? 'navbar-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenuClick}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="navbar-menu"
              anchorEl={anchorEle}
              open={open}
              onClose={handleMenuClose}
              // keepMounted
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem sx={{ '&:hover': { backgroundColor: '#b0bec5' } }}>
                <Button sx={{ 
                    color: 'rgb(33, 40, 50)', 
                    fontWeight: '600', 
                    fontSize: '17px'
                  }} 
                >
                  <HomeRounded color='inherit' sx={{ pr: '7px', fontSize: '18px' }} />
                  <Link 
                    component={RouterLink}
                    to='/'
                    color='inherit' 
                    variant='p' 
                    underline='none' 
                    textTransform='capitalize'
                  >
                    Home
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { backgroundColor: '#b0bec5' } }}>
                <Button sx={{ 
                    color: 'rgb(33, 40, 50)', 
                    fontWeight: '600', 
                    fontSize: '17px'
                  }}
                >
                  <InfoRounded color='inherit' sx={{ pr: '7px', fontSize: '18px' }} />
                  <Link 
                    component={RouterLink}
                    to='/about'
                    color='inherit' 
                    variant='p' 
                    underline='none' 
                    textTransform='capitalize'
                  >
                    About
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;