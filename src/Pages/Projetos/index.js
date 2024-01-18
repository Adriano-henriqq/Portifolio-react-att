import { Container, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import styles from './Projetos.module.css'
import { theme } from 'Pages/Inicio'
import Cards from 'Components/Cards'
import projetoResgate from 'assets/ResgateFront.png'
import projetoSalao from 'assets/projetoSalao.png'



export default function Projetos() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container  className={styles.scrollbarContainer} maxWidth='lg'>
          <Typography textAlign={'center'} marginTop={'rem'} variant='h4'> Conheça meus projetos </Typography>
          <Grid justifyContent={'center'} alignItems={'center'} gap={'1rem'}  className={styles.container} margin={'1rem'} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

            <Grid className={styles.item} item xs={11} sm={5}>
              <Cards
                foto={projetoResgate}
                titulo={'Projeto Resgate Front'}
                descricao={'Parte visual De um sistema feito no EB para um envio de emails, para os conscritos que faltaram a selecao geral do alistamento'}
                siteLink={'https://projeto-resgate-front.vercel.app/'}
                repoLink={'https://github.com/Adriano-henriqq/projeto-resgate-front'}
                tecnologias={'Html, Css, JavaScript'}
              />
            </Grid>
            <Grid item xs={11} sm={5} md={5}>
              <Cards
                foto={projetoSalao}
                titulo={'Cadastro de Clientes para salao'}
                descricao={'Projetinho simples para cadastro de cilentes, usado para treinar principios de JavaScript,html e css'}
                alt={'ScreenShot do sistema de cadastro'}
                siteLink={'https://adriano-henriqq.github.io/Projeto-Salao/'}
                repoLink={'https://github.com/Adriano-henriqq/Projeto-Salao'}
                tecnologias={'Html, Css, JavaScript'}
              />
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}