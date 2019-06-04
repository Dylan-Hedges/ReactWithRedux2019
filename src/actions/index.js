import _ from 'lodash';
//Stores the first part of the API URL
import jsonPlaceholder from '../apis/jsonPlaceholder';

//Fetch Posts Action Creator - returns a function - Redux Thunk needs to be wired up to do this
export const fetchPosts = () => {
  //Returns a function
  return async (dispatch) => {
    //Makes axios request and saves result in response variable
    const response = await jsonPlaceholder.get('/posts');
    //Returns axios results with type
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  };
};

//Fetch User Names Action Creator - Calls the memoized function
export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
};
//Fetch User Names Memoized Function - Part of Lodash calls the Action Creator ONLY ONE TIME with each UNIQUE user id
const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
