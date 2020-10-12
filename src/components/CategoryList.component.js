import React from 'react';
import Category from './Category.component'

const CategoryList = (props) => {


    
    const category = props.categories.map(category => {
        return <Category category={category} key={category.id}/>
    })


    return ( 
        <>
            {category}
        </> 
    );
    
}
 
export default CategoryList;