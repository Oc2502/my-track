import React from 'react';
import musicList from '../../apis/musicList';
import SearchBar from '../SearchBar.component';
import TrackList from '../TrackList.component';



class Search extends React.Component {
    state = { tracks: [] }


    onFormSubmit = async (term) => {
        // console.log(new App().state)
        const response = await musicList.get(`/search?&type=track`, {
            params: { q: term },
        });
        this.setState({tracks: response.data.tracks.items})
    }

    render() { 
        return ( 
            <div className="search">
                <SearchBar onSubmit={this.onFormSubmit}/>
                <div>
                    <TrackList tracks={this.state.tracks}/>
                </div>
            </div> 
        );
    }
}
 
export default Search;