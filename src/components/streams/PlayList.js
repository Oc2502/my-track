import React from 'react';
import musicList from '../../apis/musicList';
import lyrics from '../../apis/lyrics';


class PlayList extends React.Component {
    constructor(props){
        super()
    }
    state = { playing: null, playList:[], lyrics: null}

    componentDidMount = () => {
        // console.log('play-app-token', token)
        this.getUserList()
       
    }

    getUserList = async () => {
        const response = await musicList.get('/me/tracks', {
            // params: { query: term }
        });
        this.setState({playList: response.data.items})
    }

    onTrackClick = (e) => {
        console.log(this.state.playList[e.target.id])
        this.setState({playing : this.state.playList[e.target.id], lyrics: null})
    }

    nowPlaying = () => {
        console.log(this.state.playing.track.artists[0].name)
        console.log(this.state.playing.track.name)
        return (
            <div className="now-playing">
                <div> 
                    <img src={`${this.state.playing.track.album.images[0].url}`}/>
                    <button onClick={this.getTrackId}> View Lyrics</button>
                </div>
                 {this.state.lyrics ? <div className="lyrics-container">{this.state.lyrics}</div> : null}
            </div>
        );
    };

    getTrackId = async () => {
        const tarckArtist = this.state.playing.track.artists[0].name
        const trackName = this.state.playing.track.name
        const response = await lyrics.get(`track.search?q_artist=${tarckArtist}&q_track=${trackName}&apikey=717601ea1e57498a958b54e2a1f76178`, {
        });
        const tracksList = response.data.message.body.track_list.find(track => track.track.has_lyrics > 0)
        this.showLyrics(tracksList.track.track_id)
        
    };

    showLyrics = async (trackId) => {
        try {
            const response = await lyrics.get(`track.lyrics.get?track_id=${trackId}&apikey=717601ea1e57498a958b54e2a1f76178`, {
                
            });
        // console.log(response.data.message.body.lyrics.lyrics_body)
            return this.setState({ lyrics: response.data.message.body.lyrics.lyrics_body})
        } catch (err) {
            console.log(err)
        }
       
    };

  

    render() { 
        return ( 
            <div className = 'list-page'>
                <div className="list-container">
                    <div>
                        {this.state.playing ? this.nowPlaying() : null}
                    </div>
                    <div>
                        {/* <PlayerNew/> */}
                    </div>
                    <div class='list'>
                        <ul>
                            {  this.state.playList.map( (track, i )=> { 
                                return (
                                    <li id={i} onClick={this.onTrackClick} >
                                        <span>{i+1}</span>
                                        {track.track.name} 
                                        <span>show</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default PlayList;