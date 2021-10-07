import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div `
    width: 69% auto;
    padding: 15px;
    background-color: grey;
    margin: 2;
    border: 10px solid red;
    opacity: .7;
    `

const realImage = styled.img `
    max-width: 100%;
    border: 10px solid blue;
    `

const Comments = styled.div`
    font-family: 'Akronim', cursive;
    width: 80%;
    color: white;
    padding: 5px;
    margin: 2px;
    background-color: pink;
    opacity: .5;
    border: 5px solid black;
    border-radius: 3px;
`;



function Image(props) {
    console.log(props);
    if (!props.image) return <h3>Loading...</h3>; //if the image is loading, display Loading message while the data comes

return (
    <ImageContainer>
        <realImage src={props.image} alt="Space X rules" />
        <Comments> 
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </Comments>
    </ImageContainer>
)
}

export default Image;