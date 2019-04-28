import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  //Waits for images to load then executes setSpans function
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //Takes height of images and sets the spans on the state
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10);
    this.setState({ spans: spans });
  }

  //Displays images - dynamically sets the spans for each image using state
  render(){
    const {description, urls} = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          />
      </div>
    )
  }
}


export default ImageCard;
