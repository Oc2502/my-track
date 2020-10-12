import React from 'react';
import Track from './Track.component'

const TrackList = (props) => {
    // state = {  }

    const tracks = props.tracks.map(track => {
        // console.log(track)
        return (
            <Track 
            key={track.id} 
            trackId={track.id} 
            name={track.name} 
            img={track.album.images[0].url} 
            style={{width:50}}
            track={track}
            />
            
        )
    })

    return ( 
        <div className="track-container">
            {tracks}
        </div> 
    );
   
}
 
export default TrackList;