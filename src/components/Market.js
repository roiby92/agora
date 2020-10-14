import React from 'react';
import { observer,inject} from 'mobx-react'
import Item from './Item';

const Market = inject('myInventory')(observer((props) => {

    const addItem = event => {
        if (event.key === 'Enter' && event.target.value) {
            props.myInventory.addItem(event.target.value)
            event.target.value=''
        }
    }
    
    return (
        <div>
            <input type='text'  onKeyDown={addItem} />
            <ol>
                {props.myInventory.items.map((item, i) => <Item key={i} item={item} inventory={props.Inventory} />)}
            </ol>
        </div>
    );
}));

export default Market;