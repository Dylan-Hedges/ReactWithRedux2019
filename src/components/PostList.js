import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return <div>Post List</div>;
  }
}

//State = entire Redux store; state.posts = the postsReducer
const mapStateToProps = (state) =>{
  return { posts: state.posts};
};
//Wires up action creator to the component
export default connect(mapStateToProps, {fetchPosts:fetchPosts})(PostList);
