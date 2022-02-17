import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreOptions from './MoreOptions';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Post(props) {
  const data = props.post;
  const [open, setOpen] = React.useState(false);
  const handleOpenLearnMore = () => setOpen(true);
  const handleCloseLearnMore = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }} color="secondary" raised>
      <CardHeader
        action={
          <MoreOptions
            data={data.id}
            handleDeleteClick={() => props.handleDelete(data.id)}
            handleHideClick={() => props.handleHide(data.id)}
            handleSaveClick={() => props.handleSave(data.id)}
            handleUnsaveClick={() => props.handleUnsave(data.id)}
          />
        }
        sx={{ backgroundColor: '#10304e', color: '#FFCB05' }}
        title={data.category}
        subheader={<span style={{ color: "white" }}>{data.uniqname}</span>}
      />
      <CardMedia
        component="img"
        height="140"
        // image="/img/krists-luhaers-AtPWnYNDJnM-unsplash.jpg"
        image={data.image}
      />
      <CardContent sx={{ backgroundColor: "E2E2E2" }}>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpenLearnMore} size="small">Learn More</Button>
        <Modal
          open={open}
          onClose={handleCloseLearnMore}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <Typography m={2}  component="h2">
              {data.desc}
            </Typography>
            <Typography  id="modal-modal-title" variant="h6"  component="h2">
              Contact Information
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              If you wish to discuss this topic more, you can contact {data.uniqname} at {data.contInfo}
            </Typography>
          </Box>
        </Modal>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}