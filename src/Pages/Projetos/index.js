import { Container, CssBaseline, Fade, Grid, ThemeProvider, Typography } from '@mui/material'
import styles from './Projetos.module.css'
import { theme } from 'Pages/Inicio'
import Cards from 'Components/Cards'

import projetos from '../../projetos.json'
import { useEffect, useState } from 'react'
import axios from 'axios'



export default function Projetos() {
  const [dadosRepository, setDadosRepository] = useState([])

  const getProjetos = async () => {
    const { data } = await axios.get('https://api.github.com/users/Adriano-henriqq/repos')
    setDadosRepository(data)
  }

  useEffect(() => {
    getProjetos();
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <Fade appear direction='left' timeout={1500} in>  
        <Container className={styles.scrollbarContainer} maxWidth='lg'>
          <Typography textAlign={'center'} variant='h4'> Conheça meus projetos </Typography>
          <Grid justifyContent={'center'} alignItems={'center'} className={styles.container} margin={'2rem'} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {dadosRepository.filter((repository) => repository.name === 'pokeList' || repository.name === 'my-contacts'|| repository.name === 'projeto-resgate').map((projeto) => (
              <Grid className={styles.item} key={projeto.id} item xs={10} sm={7} md={4}>
                <Cards
                  foto={projetos.find((projetoJson)=> projetoJson.repo === projeto.html_url)?.img}
                  titulo={projeto.name}
                  descricao={projeto.description}
                  siteLink={projeto.homepage}
                  repoLink={projeto.html_url}
                  alt={'foto do projeto'}
                  tecnologias={projetos.find((projetoJson)=> projetoJson.repo === projeto.html_url)?.tecnologias}
                />
              </Grid>
            ))}


          </Grid>
        </Container>
       </Fade> 
      </CssBaseline>
    </ThemeProvider>
  )
}