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
    <header>
      <h1>Dog App</h1>
      <p>ワンちゃん画像を集めたサイト</p>
      <img src={dogUrl}/>
    </header>
  )
}
