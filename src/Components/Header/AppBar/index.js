import styles from './AppBar.module.css'
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import NavMenu from '../../Nav';
// import logo from 'assets/Adriano Henrique.png'
// import MenuContatos from 'Components/MenuContatos';
// import { ThemeProvider, createTheme } from '@mui/material';

// export const Theme = createTheme({

//     palette:{
//         primary: {
//          main: '#1c1c1e'
//         }
//     }, 
//     bacground: {
//         default: '#1c1c1e'
//     }
// })

// function ResponsiveAppBar() {

//     return (
//     <ThemeProvider theme={Theme}>    
//      <AppBar elevation={0} position='static' className={styles.App}>
//         <Toolbar disableGutters className={styles.toolbar}>
//           <img className={styles.logoPerfil} src={logo} alt=''/>
//           <nav className={styles.listaContainer}>
//             <NavMenu to='/'>Inicio</NavMenu>
//             <NavMenu to='/projetos'>Projetos</NavMenu>
//             <NavMenu to='/sobremim'>Sobre Mim</NavMenu>
//             <div className={styles.menuContatos}>
//                 <MenuContatos/>
//             </div>
//           </nav>

//             </Toolbar>
//         </AppBar>
//     </ThemeProvider>   
//     );
// }
// export default ResponsiveAppBar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import logo from 'assets/Adriano Henrique.png'
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import MenuContatos from 'Components/MenuContatos';

const pages = ['Inicio', 'Projetos', 'Sobre mim'];
const routes = ['/', '/projetos', '/sobremim'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar sx={{ backgroundColor: '#1c1c1e' }} elevation={0} position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }} disableGutters>
          <Typography
            variant="img"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src={logo} className={styles.logoPerfil} alt='' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink style={{ textDecoration: 'none', color:'black' }} to={routes[index]}>{page}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:5 }}>
            {pages.map((page, index) => (
                <NavLink style={({ isActive, isPending }) => {
                  return {
                    textDecoration: isActive ? "underline" : "none",
                    color: isPending ? "#d9d9d9" : "#d9d9d9",
                    fontSize: '18px'
                  };
                  
                }} to={routes[index]}>{page}</NavLink>
              
            ))}
          </Box>
          <Box >
            <MenuContatos />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;