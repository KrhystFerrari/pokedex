import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';


export default function PokemonCard({ name, image, types }) {
    const typeHandler = () => {
        if(types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="green iguana"
        />
        <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    { name }
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    { typeHandler() }
                </Typography>
          </Box>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
  </Typography> */}
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
  </CardActions> */}
    </Card>
  );
}
