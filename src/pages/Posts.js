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

  // const handleDelete = async(id) => {
  //   console.log("handleDelete")
    // await fetch('http://localhost:8000/posts' + id, {
    //   method: 'DELETE'
    // })
    // const newPosts = posts.filter(post => post.id !== id)
    // setPosts(newPosts)
  // }

  const handleDelete = (id) => {
    console.log("handleDelete " + id)
  }

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
        {posts.map(post => (
          <Grid item xs={2} sm={3} md={4} key={post.id}>
            <Post post={post} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
