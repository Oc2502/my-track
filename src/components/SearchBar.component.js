import React from 'react';

class SearchBar extends React.Component {
    state = { value: '' }


    onInputChange = (e) => {
        console.log(e.target.value)
        this.setState({value: `${e.target.value}`})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value)
    }

    render() { 
        return ( 
            <div >
                <div className='container'>
                    Find Your Song 
                    <form onSubmit={this.onFormSubmit}>
                        <input type="textarea"
                        value={this.state.value}
                        onChange={this.onInputChange}
                        />
                    </form>
                </div>
            </div> 
        );
    }
}
 
export default SearchBar;