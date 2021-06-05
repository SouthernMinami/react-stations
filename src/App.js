// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Header      from './components/Header'
import Description from './components/Description'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div className="App">
      <Header
        title={'Dog App'}
      />
      <Description
        description = {'ワンちゃんの画像を集めたサイトです'}
        text={'更新'}
      />
      <hr/>
    </div>
  )
};
