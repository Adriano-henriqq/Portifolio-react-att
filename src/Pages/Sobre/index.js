import CssBaseline from '@mui/material/CssBaseline';
import styles from './Sobre.module.css'
import Container from '@mui/material/Container';
import {  Fade,  Typography } from '@mui/material';
import html from 'assets/html5.svg'
import cssIcon from 'assets/icon-css.svg'
import jsIcon from 'assets/icon-js.svg'
import typeIcon from 'assets/9073601_typescript_icon.svg'
import react from 'assets/1174949_js_react js_logo_react_react native_icon.svg'
import logoAdriano from 'assets/Adriano Henrique.png'

export default function Sobre(){
   

    return(
        <>
        <CssBaseline />
        <Container maxWidth="md">
           <section className={styles.sobreContainer} >
            <Typography sx={{color: '#d9d9d9'}} variant='h3'>Tecnologias</Typography>
            <ul className={styles.listaIcones}>
              <li>
                <img src={html} alt='Logo Html' />  
              </li>  
              <li>
                <img src={cssIcon} alt='Logo css' />  
              </li>  
              <li>
                <img src={jsIcon} alt='Logo JavaScript' />  
              </li>  
              <li>
                <img src={react} alt='Logo React' />  
              </li>  
              <li>
                <img src={typeIcon} alt='Logo typeScript' />  
              </li>  
            </ul>

           </section> 

            <Fade appear direction='left' timeout={2000} in>  
          <section className={styles.container} >
            <Typography sx={{color: '#d9d9d9'}} variant='h3'>Sobre Mim</Typography>
            <div className={styles.sobreMimContainer}>
            <Typography sx={{color: '#d9d9d9'}} variant='body1' >Olá, me chamo Adriano Henrique e comecei minha jornada na tecnologia em busca de conhecimento e curiosidade, após um pequeno período, me identifiquei com sua forma de trabalho e as possibilidades que ela oferece. Comecei assim como todos, com pequenos projetos, adicionando eventos, mexendo com animações, sempre procurando acrescentar algo novo em cada um deles. Possuo habilidades nas tecnologias Html, Css, JavaScript, React e TypeScript.  Estou estudando cada vez mais, aprimorando minhas técnicas e tentando ser um desenvolvedor melhor todos os dias.</Typography>
            <Fade appear direction='right' timeout={2000} in>  
            <img id='imgPerfil' className={styles.imgPerfilSobre} src={logoAdriano} alt='Imagem de um boneco mexendo no computador'/>
            </Fade>
            </div> 
          </section> 
            </Fade>
        </Container>
        </>
    )
}