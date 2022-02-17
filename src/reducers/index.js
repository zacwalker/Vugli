import { combineReducers } from "redux";
import saveReducer from './saveReducer.js'
import postReducer from './postReducer.js'

export default combineReducers({
    savedPosts: saveReducer,
    posts: postReducer
})