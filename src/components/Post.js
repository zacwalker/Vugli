import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreOptions from './MoreOptions';


// TODO add delete (maybe hide as well), make functions for buttons, 
export default function Post(props) {
  const data = props.post;

  return (
    <Card sx={{ maxWidth: 345 }} color="secondary" raised>
      <CardHeader
        action = {        
            <MoreOptions 
              data={data.id}
              handleDeleteClick={() => props.handleDelete(data.id)} 
            />
        }
        sx={{ backgroundColor: 'primary.main', color: 'white' }}
        title={data.category}
        subheader={data.uniqname}
        color='white'
      />
      <CardMedia
        component="img"
        height="140"
        // image="/img/krists-luhaers-AtPWnYNDJnM-unsplash.jpg"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}