//Stores the first part of the API URL
import jsonPlaceholder from '../apis/jsonPlaceholder';

//Action Creator that returns a function - Redux Thunk needs to be wired up to do this
export const fetchPosts = () => {
  //Returns a function
  return async (dispatch) => {
    //Makes axios request and saves result in response variable
    const response = await jsonPlaceholder.get('/posts');
    //Returns axios results with type
    dispatch({type: 'FETCH_POSTS', payload: response.data});
  };
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
