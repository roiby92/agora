import React from 'react';
import { observer,inject } from 'mobx-react'

const Item =  inject('myInventory')(observer((props) => {
    const { item,myInventory } = props

    const buyItem = () => {
        myInventory.buyItem(item.name)
    }

    const changePrice = () => {
        const price = prompt('Enter Your New Price...')
        myInventory.changePrice(item.name, parseInt(price))
    }
    console.log(item)
    return (
        <li onDoubleClick={changePrice}>
            {item.quantity > 0 ? item.quantity : 0} {item.name} available at ${item.price} per item
            <button onClick={buyItem}>Buy</button>
        </li>
    );
}));

export default Item;