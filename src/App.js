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
  const [money, setMoney] = useState('')
  const [chosedItem, setChosedItem] = useState(null)
  const [totalProfit, setTotalProfit] = useState(null)
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
    setUserChange([])
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
    let moneyTo = Number(money)
    let change = vending.buy(row, col, moneyTo)
    // console.log(change)
    setUserChange(change)
    setMoney(0)
    setTotalProfit(vending.showProfit())
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
      <div style={{ marginBottom: '10px' }}>
        <button onClick={resetItem}>
          choose another Item
      </button>
      </div>

      <input value={money} onChange={(e) => setMoney(e.target.value)} />
      <button onClick={() => buy(row, col, money)} style={{ marginBottom: '20px' }}>
        buy
      </button>
      <div>

        {
          Array.isArray(userChange) && userChange.length > 1 && <h3>this is your changes mate</h3>
        }
        {
          Array.isArray(userChange) && userChange && userChange.map((change, i) => <h3 key={i} >{change}</h3>)
        }
      </div>
      {
        totalProfit && <div className='profit'>
          <h3>Profit until now : ${totalProfit}</h3>
        </div>
      }


    </div>
  );
}

export default App;
