import React from 'react'
import Post from '../components/Post.js'
import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
        {posts.map(post => (
          <Grid item xs={1} sm={3} md={3} key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
