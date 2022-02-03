import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreOptions from './MoreOptions';


export default function Post(props) {
  const data = props.post;
  
  return (
    <Card sx={{ maxWidth: 345 }} color="secondary" raised>
      <CardHeader
        action={
          <MoreOptions
            data={data.id}
            handleDeleteClick={() => props.handleDelete(data.id)}
            handleHideClick={() => props.handleHide(data.id)}
            handleSaveClick={() => props.handleSave(data)}
          />
        }
        sx={{ backgroundColor: '#10304e', color: '#FFCB05' }}
        title={data.category}
        subheader={<span style={{color: "white"}}>{data.uniqname}</span>}
      />
      <CardMedia
        component="img"
        height="140"
        // image="/img/krists-luhaers-AtPWnYNDJnM-unsplash.jpg"
        image={data.image}
      />
      <CardContent sx={{backgroundColor: "E2E2E2"}}>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}