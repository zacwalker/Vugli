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

  const handleSave = async (post) => {
    // post.saved = true;
    // console.log(post)
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {saved: true} )
    };
    await fetch('http://localhost:8000/posts/' + post.id, requestOptions)
        .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));
    
    console.log("handle save for id: " + post.id)
  }

  //   componentDidMount() {
  //     // Simple PUT request with a JSON body using fetch
  //     const requestOptions = {
  //         method: 'PUT',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ title: 'React PUT Request Example' })
  //     };
  //     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
  //         .then(response => response.json())
  //         .then(data => this.setState({ postId: data.id }));
  // }

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {posts.map(post => (
          <Grid item sm={12} md={6} lg={3} key={post.id}>
            <Post
              post={post}
              handleDelete={handleDelete}
              handleHide={handleHide}
              handleSave={handleSave}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
