import React from 'react';
import Category from './Category.component'

const CategoryList = (props) => {


    
    const category = props.categories.map(category => {
        return <Category category={category}/>
    })


    return ( 
        <>
            {category}
        </> 
    );
    
}
 
export default CategoryList;