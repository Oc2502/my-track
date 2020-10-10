import React from 'react';

const Button = (props) => {


    const onButtonClick = (e) => {
        props.func(props.trackId)
    }

    return(
        <>
            <button onClick={onButtonClick} >{props.value}</button>
        </>
    );
};

export default Button;