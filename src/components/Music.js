import React from 'react';
// "https://open.spotify.com/track/76hZxDH0P7a21nC9zrOaZl"

class Music extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {play: false}
        let audio = new Audio(this.props.url) 
    }
    
  
    componentDidMount = () => {
        console.log('token')
      this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
  
    componentWillUnmount = () => {
      this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default Music;