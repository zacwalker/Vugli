import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("fetchPosts is called")
  fetch('http://localhost:8000/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}