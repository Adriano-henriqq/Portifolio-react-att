import * as React from 'react';
import styles from './Cards.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Link } from '@mui/material';



export default function Cards({foto,alt,titulo,descricao,repoLink,siteLink,tecnologias}) {
    return (
      <Card  sx={{maxWidth: '400px', height:'auto', borderRadius: 6, backgroundColor: '#2e2e30', color: '#d9d9d9'}}>
        <CardActionArea>
        <Link href={siteLink} sx={{textDecoration:'none', color:'inherit'}}>
          <CardMedia
            component="img"
            height="250px"
            image={foto}
            alt={alt}
          />
         
          <CardContent >
            <Typography  gutterBottom variant="h5">
              {titulo}
            </Typography>
            <Typography sx={{color: '#d9d9d9', fontSize: 16, }} variant="body2" >
              {descricao}
            </Typography>
            <Box sx={{borderBottom: '1px solid lightGray', padding: '10px 0 0 0'}} > </Box>
            <Typography sx={{color: '#d9d9d9'}} variant="h6" component='div' marginTop={2}>
              Tecnologias: 
            </Typography>
            <Typography variant='body2'>{tecnologias}</Typography>
          </CardContent>
          </Link>
          
        </CardActionArea>
        <CardActions sx={{display: 'flex', justifyContent:'space-around', alignItems: 'flex-end', p:3}}>
           <Button color='info' variant='contained'><a className={styles.linkItem} href={repoLink}>Repositorio</a></Button>
           <Button variant='contained' color='info' ><a className={styles.linkItem} href={siteLink}>acesse</a></Button>
        </CardActions>
      </Card>
 
    );
  }