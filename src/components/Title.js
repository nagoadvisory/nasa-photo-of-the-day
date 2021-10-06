import React from 'react';

function Title(props) {

    if (!props.title) return <h3>Loading...</h3>; //if the image is loading, display Loading message while the data comes

    return (
        <div>
            <h2>{props.title} </h2>
            </div>
    )
    
}

export default Title;