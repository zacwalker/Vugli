import React from 'react';
import Post from '../components/Post.js'
import { Container, Grid } from '@mui/material';

export default function Saved() {
  const [posts, setPosts] = React.useState([]);
  var sortSaved = true;

  React.useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    // .then(setPosts(posts.filter(post => post.saved === true)))
  }, [])

  return (
    < Container >
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {posts.map(post => (
          <Grid item sm={12} md={6} lg={3} key={post.id}>
            <Post
              post={post}
              sortSaved={sortSaved}
            //   handleDelete={handleDelete}
            //   handleHide={handleHide}
            //   hadnleSave={handleSave}
            />
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}
