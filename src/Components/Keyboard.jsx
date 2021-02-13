import React, { useState } from 'react'

const Keyboard = ({ setRow, setCol, setCount, count, setChosedItem }) => {
    const numbers = [1, 2, 3, 4, 5]

    const rowCol = (e) => {
        if (count === 1) {
            setRow(e.target.value)
            setCount(count + 1)
        }
        else if (count === 2) {
            setCol(e.target.value)
            setCount(count + 1)
        }
        else {
            alert('I will reset them for you mate dont worry')
            setCount(1)
            setRow(null)
            setCol(null)
            setChosedItem(null)
        }
    }


    return (
        <div className='keyboard'>
            {
                numbers.map((number, i) => <button className='keyboard__button'
                    key={i} value={number}
                    onClick={rowCol} >{number}</button>)
            }
        </div>
    )
}

export default Keyboard