import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super()
        this.state = { loggedIn : props.loggedIn }
    }


    render() { 
        
        return ( 
            <div className='header'>
               <Link to="/">Home</Link>
               <Link to="/list">List</Link>
               <Link to="/Search">Search</Link>
              {this.state.loggedIn ? <span>hello</span> :  <a href="http://localhost:8888">log in to Spotify</a>}
            </div>
         );
    }
}
 
export default Header;