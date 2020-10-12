import React from 'react';
import musicList from '../../apis/musicList';
import CategoryList from '../CategoryList.component';
// import App from '../../App'

class HomePage extends React.Component {

    constructor(){
        super()
        // const token = new App().state.token
        this.state = { categories:[], token:''  }
    }
    


    componentDidMount = () => {
        this.getCategories()
        // this.setState({token: new App().state.token},()=>{
        //     console.log(this.state.token)
        // })
        // console.log('token-home', token)
        // console.log('token-app', new App().state.token)

    }

    getCategories = async() => {
        const response = await musicList.get('/browse/categories', {
        });
        this.setState({categories: response.data.categories.items })
    } 

    renderCategory = () => {
        return <CategoryList categories={this.state.categories}/> 
    }
    
    
    render() { 
        
        return ( 
            <div className="homePage">
                {this.state.categories ? this.renderCategory() : <div> no content to show, log in to spotify</div>}
            </div>
        );
    }
}
 
export default HomePage;