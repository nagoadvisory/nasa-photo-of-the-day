import React from 'react';


function Image(props) {
    console.log(props);
    if (!props.image) return <h3>Loading...</h3>; //if the image is loading, display Loading message while the data comes

return (
    <div>
        <img src={props.image} alt="Space X rules" />
    </div>
)
}

export default Image;