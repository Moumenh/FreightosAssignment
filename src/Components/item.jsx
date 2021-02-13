import React from 'react'

import './styles.css'

const Item = ({ item }) => {
    // console.log(item)

    return (
        <div className='item'>
            <img className='item__img' src={item.img} alt='item' />
            <div className='item__info'>
                <h3>{item.item}</h3>
                <h3>${item.price}</h3>
            </div>
            <h3 className='item__location'>{item.location}</h3>
            {/* <h3 className='item__quantity'>{item.quantity}</h3> */}
        </div>
    )
}

export default Item