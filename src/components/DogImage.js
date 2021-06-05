import * as React from 'react'

const DogImage = (props) => {
    return  (
        <div>
            <img
                src={props.url}
                className="dog-img"
                alt="ワンちゃん画像"
            />
            <br/>
        </div>
    )
};

export default DogImage
