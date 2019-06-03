import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderList(){
    return this.props.posts.map(post => {
      return(
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
      );
    });
  }
  render(){
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

//State = entire Redux store; state.posts = the postsReducer
const mapStateToProps = (state) =>{
  return { posts: state.posts};
};
//Wires up action creator to the component
export default connect(mapStateToProps, {fetchPosts:fetchPosts})(PostList);
