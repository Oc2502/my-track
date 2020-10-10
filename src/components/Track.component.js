import React from 'react';
import Button from './Button.component';
import musicList from '../apis/musicList';
import Music from './Music'

class Track extends React.Component {
    state = { isPlaying: false }

    play = async () => {
        console.log('play')
        this.setState({isPlaying : true})
        // try {
        //     const response = await musicList.put(`/me/player/play`, {
        //         ontext_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
        //         offset: { position: 5 }
        //         // uris : "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
        //         // "offset": {
        //         //     "position": 5
        //         //   },
        //         //   "position_ms": 0
                
        //     });
        // } catch (err) {
        //     console.error(err);
        // }

    }

    addTolist = async (id) => {
        console.log('add to list')
        try {
            const response = await musicList.put(`/me/tracks?ids=${id}`, {
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() { 
        return ( 
            <div className='track'>
                <div>
                    <p>{this.props.name}</p>
                    <img src={`${this.props.img}`}></img>
                </div>
                <div>
                    <Button value='Add To List' func={this.addTolist} trackId={this.props.trackId}/>
                    <Button value='View Details' func={this.trackDetails} track={this.props.track}/>
                    {/* <Button value='play' func={this.play}/> */}
                </div>
            </div>
         );
    };
};
 
export default Track;