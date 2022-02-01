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

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/posts/' + id, {
      method: 'DELETE'
    })
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const handleHide = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const handleSave = (id) => {
    console.log("handle save")
  }

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {posts.map(post => (
          <Grid item sm={12} md={6} lg={3} key={post.id}>
            <Post
              post={post}
              handleDelete={handleDelete}
              handleHide={handleHide}
              hadnleSave={handleSave}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
