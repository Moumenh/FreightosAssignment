import React from 'react'

import Item from './Components/item'
import { items } from './VendingClass'

import './App.css';
// console.log(items)

const App = () => {
  return (
    <div className="App">
      <h1>Hey my friend</h1>


      {
        items.map((item, i) => {
          return (
            <div className='items' key={i}>
              {
                item.map((ite, i) => <Item key={i} item={ite} />)
              }
            </div>
          )
        })
      }

      {/* <Item /> */}


    </div>
  );
}

export default App;
