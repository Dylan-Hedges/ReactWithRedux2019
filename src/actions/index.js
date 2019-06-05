import _ from 'lodash';
//Stores the first part of the API URL
import jsonPlaceholder from '../apis/jsonPlaceholder';

//Fetches Posts & User Info - Prevents overfetching (multiple requests from components)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //Calls Fetch Posts action creator
  await dispatch(fetchPosts());

  //Gets list of posts.Maps over userId.Finds unique ids.runs fetchUser() AC with each id.executes the chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch (fetchUser(id)))
    .value()
};

//Fetch Posts action areator - returns a function - Redux Thunk needs to be wired up to do this
export const fetchPosts = () => {
  //Returns a function
  return async (dispatch) => {
    //Makes axios request and saves result in response variable
    const response = await jsonPlaceholder.get('/posts');
    //Returns axios results with type
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  };
};

//Fetch User Info action creator - Fetches user info
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};

//-----Alternative to Chain--------
//Gets the unique id for each user and stores in new array
//const userIds = _.uniq(_.map(getState().posts, 'userId'));
//Calls the Fetch User Info action creator - calls with unique id to prevent overfetching
//userIds.forEach(id => dispatch (fetchUser(id)));

//-----------Memoized Solution------------------
//Fetch User Names Action Creator - Calls the memoized function
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// };
// //Fetch User Names Memoized Function - Part of Lodash calls the Action Creator ONLY ONE TIME with each UNIQUE user id
// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
