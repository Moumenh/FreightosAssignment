import React, { useState, useEffect } from 'react'
import { items, initialMoney, changes, Vendor } from './VendingClass'

import Item from './Components/item'
import Keyboard from './Components/Keyboard'


import './App.css';

const vending = new Vendor(items, changes, initialMoney)

const App = () => {
  const [userChange, setUserChange] = useState([])
  const [row, setRow] = useState(null)
  const [col, setCol] = useState(null)
  const [count, setCount] = useState(1)
  const [money, setMoney] = useState(0)
  // console.log(userChange)
  console.log(row)
  console.log(col)

  const buy = (row, col, money) => {
    // if (!row || !col) {
    //   return alert('WHAT DO YOU WANT TO BUY ?')
    // }
    let change = vending.buy(row, col, money)
    console.log(change)
    setUserChange(change)
  }

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
      <Keyboard setRow={setRow} setCol={setCol} setCount={setCount} count={count} />
      <input value={money} onChange={(e) => setMoney(Number(e.target.value))} />
      <button onClick={() => buy(row, col, money)}>
        buy
      </button>

    </div>
  );
}

export default App;
