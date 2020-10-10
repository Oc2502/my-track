import React from 'react';
import Track from './Track.component';
import musicList from '../apis/musicList';


class Category extends React.Component {

    constructor(props) {
        super()
        this.state = { category: null, tracks: [] }
    }
    

    componentDidMount = () => {
        // console.log('here', this.props.category)
        this.setState({category: this.props.category}, ()=> {
            // console.log(this.state.category)
            this.categoryPlaylist()
        })  
        
    }

    categoryPlaylist = async () => {
        
        const response = await musicList.get(`/browse/categories/${this.state.category.id}/playlists?&limit=5`, {
            // params: { category_id: `${this.state.category.id}` }
        })
        // console.log('here', response.data.playlists.items)
        this.setState({tracks: response.data.playlists.items})    
    } 
     
    
    render() { 
        return ( 
            <>
               {this.state.category && <h2>{this.state.category.name}</h2>}
               <hr/>
               <div className="category-container">
                    {this.state.tracks && this.state.tracks.map(track => {
                        return (
                            <Track 
                            key={track.id} 
                            trackId={track.id} 
                            name={track.name} 
                            img={track.images[0].url} 
                            style={{width:50}}
                            />
                            
                        )
                    })}
                </div>
            </>
         );
    }
}
 
export default Category;
