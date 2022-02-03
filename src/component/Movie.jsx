
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Movie({Poster,Title,Year,title,year}) {
  
  const addwish = (e) => {
    console.log(title);
  };

  return (
    <Card sx={{ maxWidth: 350 , display: 'inline-block',
        m:3,p:2
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={Poster}
          alt={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {Title}
          </Typography>
          <Typography variant="body1" color="text.secondary" >
            Uploaded in {Year}
            </Typography>
            <h7>Add to Watchlist</h7>
            <button onClick={addwish} style={{
              border:'white',
              background:'white',
              color:"red",
              paddingLeft:'27px',
              margin:'0px',
              fontSize:'33px',
              fontWeight:'bold'
          }} >&#10084;</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

