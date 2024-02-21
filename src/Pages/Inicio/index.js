import styles from './Inicio.module.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {  Slide, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import imgMain from '../../assets/profile-pic (3).png'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1c1c1e'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#1c1c1e',
            color: '#d9d9d9',
            
          }
        }
      }
    }
  });

  

export default function Inicio() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container   className={styles.container} maxWidth="lg">
            
            <div className={styles.tituloContainer}>
            <Slide timeout={3000}  appear in direction='right' >
                <div>
                    <Typography  fontSize={'4rem'} fontWeight={'bold'} variant='h1'>Olá,✌️ <br/>Meu nome é Adriano<br/> Henrique</Typography>
                    <Slide timeout={2000}  appear in direction='right' >   
                    <Typography  variant='subtitle1' fontSize={'22px'}>Desenvolvedor Front-End</Typography>
                    </Slide>
              </div>              
              </Slide>
              <Slide timeout={1000}  appear in direction='left' >
              <div className={styles.containerImg}>
                <img src={imgMain} alt=''/> 
              </div>
              </Slide>
 
           </div> 
           
          </Container>
        </ThemeProvider>
      </React.Fragment>
    )
  }