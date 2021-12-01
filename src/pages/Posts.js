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
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
