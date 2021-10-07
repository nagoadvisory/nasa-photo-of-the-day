import React from 'react';
import styled from 'styled-components';

const Titledisplay = styled.div`
color: #e8e8e8;
background-color: black;
border: 2px solid grey;
border-radius: 3px;
width: 60%;
margin: 0 auto;
padding: 10px;
font-family: 'Akronim', cursive;
`;

function Title(props) {

    if (!props.title) return <h3>Loading...</h3>; //if the image is loading, display Loading message while the data comes

    return (
        <Titledisplay>
            <h1> SpaceX gang or what </h1>
        <div>
            <h2>{props.title} </h2>
            </div>
            </Titledisplay>
    )
    
}

export default Title;