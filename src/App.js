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
  const [chosedItem, setChosedItem] = useState(null)
  // console.log(userChange)
  console.log(row)
  console.log(col)

  useEffect(() => {
    if (count === 3) {
      showItem()
    } else {
      return
    }
  }, [count])

  useEffect(() => {
    if (!Array.isArray(userChange)) {
      alert(`${userChange}`)
    } else {
      return
    }
  }, [userChange])

  const resetItem = () => {
    setRow(null)
    setCol(null)
    setChosedItem(null)
    setCount(1)
  }

  const showItem = () => {
    if (!row || !col) {
      return alert('WHAT DO YOU WANT TO BUY ?')
    }
    let item = vending.getItem(row, col)
    console.log(item)
    setChosedItem(item)
  }

  const buy = (row, col, money) => {
    if (!row || !col) {
      return alert('WHAT DO YOU WANT TO BUY ?')
    }
    if (money <= 0) {
      return alert('No money bro no work')
    }
    let change = vending.buy(row, col, money)
    // console.log(change)
    setUserChange(change)
    setMoney(0)

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

      {
        chosedItem &&
        <Item item={chosedItem} />

      }

      <Keyboard setRow={setRow} setCol={setCol} setCount={setCount} count={count} setChosedItem={setChosedItem} />
      <button onClick={resetItem}>
        choose another Item
      </button>
      <input value={money} onChange={(e) => setMoney(Number(e.target.value))} />
      <button onClick={() => buy(row, col, money)} style={{ marginBottom: '20px' }}>
        buy
      </button>

      {
        Array.isArray(userChange) && userChange && userChange.map((change, i) => <h3 key={i} >{change}</h3>)
      }

    </div>
  );
}

export default App;
