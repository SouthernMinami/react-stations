// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  //dogUrlの初期値
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/frise-bichon/3.jpg")
  return (
    <body>
      <header>
        <h1>Dog App</h1>
      </header>
      <div>
        <p>ワンちゃん画像を集めたサイト</p>
        <img src={dogUrl}/>
        <button onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => {
            return res.json();
          })
          .then(myJson => {
            setDogUrl(myJson['message'])
          })
        }>更新</button>
      </div>
    </body>
  )
}
