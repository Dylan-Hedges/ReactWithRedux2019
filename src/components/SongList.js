import React, {Component} from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  //Maps list of songs (assigned to props of component from redux store) and display on screen using JSX
  renderList(){
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    });
  }
  render(){
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Maps the Redux store to the props of this component - mapStateToProps name can be changed
const mapStateToProps = (state) => {
  return { songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
