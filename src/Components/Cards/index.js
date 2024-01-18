import * as React from 'react';
import styles from './Cards.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Cards({foto,alt,titulo,descricao,repoLink,siteLink,tecnologias}) {
    return (
      <Card  sx={{maxWidth: 'auto', height:'auto', borderRadius: 6, backgroundColor: '#2e2e30', color: '#d9d9d9'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={foto}
            alt={alt}
          />
          <CardContent>
            <Typography   gutterBottom variant="h5" component="div">
              {titulo}
            </Typography>
            <Typography sx={{color: '#d9d9d9'}} variant="body2" color="text.secondary">
              {descricao}
            </Typography>
            <Typography sx={{color: '#d9d9d9'}} variant="h6" component='div' marginTop={2}>
              Tecnologias: 
            </Typography>
            <Typography variant='body2'>{tecnologias}</Typography>
          </CardContent>
          
        </CardActionArea>
        <CardActions sx={{display: 'flex', justifyContent:'space-around', alignItems: 'flex-end'}}>
           <Button color='primary' variant='contained'><a className={styles.linkItem} href={repoLink}>Repositorio</a></Button>
           <Button variant='contained' ><a className={styles.linkItem} href={siteLink}>acesse</a></Button>
        </CardActions>
      </Card>
 
    );
  }