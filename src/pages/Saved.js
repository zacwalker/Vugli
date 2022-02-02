import React from 'react';
import Post from '../components/Post.js'
import { Container, Grid } from '@mui/material';

export default function Saved() {
  const [posts, setPosts] = React.useState([]);

  // Future sorting idea: https://codedec.com/tutorials/how-to-do-sorting-in-react/ 
  React.useEffect(() => {
    const savedFilter = (posts) => {
      let filteredData = posts.filter(filterSavedData)
      return filteredData
    }
    // instead of fetching again, could use redux or firebase
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      // .then(data => setPosts(data))
      .then(data => setPosts(savedFilter(data)))
  }, [])
  
  const filterSavedData = (post) => {
    if (post.saved === true) {
      return true;
    }
    return false;
  }

  return (
    < Container >
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {posts?.map(post => (
          <Grid item sm={12} md={6} lg={3} key={post.id}>
            <Post
              post={post}
            />
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}
