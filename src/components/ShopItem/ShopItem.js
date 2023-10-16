import React from 'react'

function ShopItem({ItemName, itemImage, itemRef}) {
  return (
    <div className='shopItem'>
        <div className='itemName'>
            <b>{ItemName}</b>
        </div>
        <div className='itemImage'>
            <img src={itemImage}/>
        </div>
        <div className='itemRef'>
            <a>show more</a>
        </div>
    </div>
  )
}

export default ShopItem