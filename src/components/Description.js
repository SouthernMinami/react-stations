import * as React from 'react'
import { useState } from 'react'
import DogImage from './DogImage.js'

const Description = (props) => {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/frise-bichon/3.jpg")
    return (
        <div className="content">
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="image">
          <DogImage url={dogUrl}/>
          <button className="btn" onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => {
              return res.json();
            })
            .then(myJson => {
              setDogUrl(myJson['message'])
            })
          }>{props.text}</button>
        </div>
      </div>
    )
};

export default Description

