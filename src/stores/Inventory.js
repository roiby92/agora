import { observable, action,computed } from 'mobx'
import Item from './Item'

export default class Inventory {
    @observable items = []

    @computed get numItems(){
        return this.items.length
    }
    @action addItem = (name) => {
        const itemIndex = this.items.findIndex(i => i.name === name)
        console.log(itemIndex > -1);
        if (itemIndex > -1) {
            this.items[itemIndex].quantity++
        } else {
            this.items.push(new Item(name))
            console.log(this.items);
        }
    }

    @action buyItem = name => {
        const itemToBuy = this.items.find(i => i.name === name)
        if (itemToBuy.quantity > 0) {
            itemToBuy.quantity--
        }
        else {
            this.items = this.items.filter(i => i.name !== name)
        }
    }

    @action changePrice = (name, price) => {
        const item = this.items.find(i => i.name === name)
        item.price = price
    }
}