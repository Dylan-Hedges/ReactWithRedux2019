import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

//Maps reducers to Redux store
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
