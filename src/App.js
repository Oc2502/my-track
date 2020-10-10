import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/streams/Header';
import PlayList from './components/streams/PlayList';
import Search from './components/streams/Search';
import HomePage from './components/streams/HomePage';
import musicList from './apis/musicList';
import TrackDetails from './components/TrackDetails';



class App extends React.Component {
    constructor() {
        super();
        const params = this.getHashParams()
        const token = params.access_token;
        this.state = {
            loggedIn: params.access_token ? true : false,
            token: params.access_token,

        }

    }
    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <div>
                        <Header loggedIn={this.state.loggedIn}/> 
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/list" component={PlayList}/>  
                        <Route path='/search' component={Search}/>
                        <Route path='/track/:id' component={TrackDetails}/>
                    </div>
                </BrowserRouter>
                
            </div>
        );
    }
}
 
export default App;