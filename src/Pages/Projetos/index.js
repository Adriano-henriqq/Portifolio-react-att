import { Container, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import styles from './Projetos.module.css'
import { theme } from 'Pages/Inicio'
import Cards from 'Components/Cards'

import projetos from '../../projetos.json'



export default function Projetos() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container  className={styles.scrollbarContainer} maxWidth='lg'>
          <Typography textAlign={'center'} marginTop={'rem'} variant='h4'> Conheça meus projetos </Typography>
          <Grid justifyContent={'center'} alignItems={'center'}  className={styles.container} margin={'1rem'} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {projetos.map((projeto) => (
                <Grid className={styles.item} key={projeto.id} item xs={10} sm={7} md={5}>
                <Cards
                  foto={projeto.img}
                  titulo={projeto.titulo}
                  descricao={projeto.descricao}
                  siteLink={projeto.link}
                  repoLink={projeto.repo}
                  tecnologias={projeto.tecnologias}
                  alt={'foto do projeto'}
                />
              </Grid>
            ))}
            
           
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}