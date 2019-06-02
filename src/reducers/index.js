import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

//Maps reducers to Redux store
export default combineReducers({
  posts: postsReducer
});
