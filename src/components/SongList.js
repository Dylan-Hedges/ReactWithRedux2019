import React, {Component} from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render(){
    console.log(this.props);
    return <div>SongList</div>;
  }
}

//Maps the Redux store to the props of this component - mapStateToProps name can be changed
const mapStateToProps = (state) => {
  return { songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
