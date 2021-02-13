import React from 'react'

import './styles.css'

const Item = ({ item }) => {
    console.log(item)

    return (
        <div className='item'>
            <img className='item__img' src='https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/208206/208206_p?pgw=1&pgwact=1' alt='item' />
            <div className='item__info'>
                <h3>name</h3>
                <h3>price</h3>
            </div>

            <h3 className='item__quantity'>0</h3>
        </div>
    )
}

export default Item