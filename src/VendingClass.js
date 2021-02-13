
export const changes = [
    { type: '10c', equal: 0.1, quantity: 50 },
    { type: '20c', equal: 0.2, quantity: 22 },
    { type: '50c', equal: 0.5, quantity: 50 },
    { type: '1$', equal: 1, quantity: 50 },
    { type: '20$', equal: 20, quantity: 30 },
    { type: '50$', equal: 50, quantity: 30 }
]

export const items = [
    [
        { item: 'cola', price: 2, quantity: 5, img: 'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/208206/208206_p?pgw=1&pgwact=1' },
        { item: 'Pepsi', price: 2, quantity: 5, img: 'https://www.luluhypermarket.com/medias/424982-01.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3wxNzk0MDh8aW1hZ2UvanBlZ3xoYjcvaDZhLzk3NzU1NTIzMzE4MDYvNDI0OTgyLTAxLmpwZ181MTVXeDUxNUh8YzE5MDY0NTE5ODE3NWIyMjVmZjRmNGUyNTRjNTc5NTAzMDZjMTdmZjQwNjkxMjc5NzE0MjdiMDg3MTQwNjViYw' },
        { item: 'Sprite', price: 3, quantity: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/51AniJpRujL._SX425_.jpg' },
        { item: 'xl', price: 4, quantity: 5, img: 'https://lh3.googleusercontent.com/proxy/69dU_FX-Z37PWmUEKfVzrZts9RYARZ3fcRsVyOsrdBJgVYTY1YZ4oRNmNWft3yqkZQwSD5cjL0y8FDtBb8dxVRj2XOXx3EgYKW-UuRTABgD3ck_W0vSm4dvDOil6PTWS4jAb8lkMo5eGyQ3cwX5_RTQSWyuUOaSrFapWdBUhqDbeo9NRd88o40CM2A' },
        { item: 'choco', price: 3, quantity: 5, img: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3a2f1be3-95a5-438c-a0a1-684d8af8c647.jpg' }
    ],

    [
        { item: 'lays', price: 2, quantity: 5, img: '' },
        { item: 'Pepsi', price: 2, quantity: 5, img: '' },
        { item: 'Sprite', price: 3, quantity: 5, img: '' },
        { item: 'xl', price: 4, quantity: 5, img: '' },
        { item: 'choco', price: 3, quantity: 5, img: '' }
    ],

    [
        { item: 'lays', price: 2, quantity: 5, img: '' },
        { item: 'Pepsi', price: 2, quantity: 5, img: '' },
        { item: 'Sprite', price: 3, quantity: 5, img: '' },
        { item: 'xl', price: 4, quantity: 5, img: '' },
        { item: 'choco', price: 3, quantity: 5, img: '' }
    ],

    [
        { item: 'lays', price: 2, quantity: 5, img: '' },
        { item: 'Pepsi', price: 2, quantity: 5, img: '' },
        { item: 'Sprite', price: 3, quantity: 5, img: '' },
        { item: 'xl', price: 4, quantity: 5, img: '' },
        { item: 'choco', price: 3, quantity: 5, img: '' }
    ],

    [
        { item: 'lays', price: 2, quantity: 5 },
        { item: 'Pepsi', price: 2, quantity: 5 },
        { item: 'Sprite', price: 3, quantity: 5 },
        { item: 'xl', price: 4, quantity: 5 },
        { item: 'choco', price: 3, quantity: 5 }
    ]
]

function total(changes) {
    let total = 0
    for (let i = 0; i < changes.length; i++) {
        total += changes[i].equal * changes[i].quantity
    }
    return total
}

const initialMoney = total(changes)
console.log(initialMoney)


export class Vendor {
    constructor(items, changes, total) {
        this.items = items
        this.changes = changes
        this.init = total
        this.total = total
        this.card = 0

    }

    buy = (itemRow, itemCol, money) => {
        let userChange = []

        if (this.items[itemRow - 1][itemCol - 1].price > money) {
            return 'more money please my friend'
        } else if (this.items[itemRow - 1][itemCol - 1].quantity === 0) {
            return 'No item atm sorry'
        }
        else {
            let totalChange = money - this.items[itemRow - 1][itemCol - 1].price
            let mahineCompare = money - this.items[itemRow - 1][itemCol - 1].price
            let machinChange = 0

            let obj = {}
            // console.log(totalChange)
            for (let i = this.changes.length - 1; i >= 0; i--) {
                // console.log((this.changes[i].quantity >=1) && (this.changes[i].equal < price))
                if ((this.changes[i].quantity >= 1) && (this.changes[i].equal < totalChange)) {
                    machinChange += this.changes[i].equal
                    totalChange = totalChange - this.changes[i].equal
                    userChange.push(this.changes[i].type)
                    this.changes[i].quantity -= 1

                    if (!obj[this.changes[i].type]) {
                        obj[this.changes[i].type] = 1
                    } else {
                        obj[this.changes[i].type] += 1
                    }

                    i++
                }
                // console.log(obj)
            }
            // console.log(machinChange, mahineCompare, userChange)
            if (mahineCompare - machinChange > .1) {

                for (let i = 0; i < this.changes.length; i++) {
                    if (obj[this.changes[i].type]) {
                        this.changes[i].quantity += obj[this.changes[i].type]
                    }
                }
                console.log(this.total)
                return 'Wow no Enough changes in the machine :('

            }
            if (mahineCompare - machinChange > 0) {
                userChange.push(this.changes[0].type)
            }
            this.total += this.items[itemRow - 1][itemCol - 1].price
        }
        console.log(userChange)
        return userChange
    }

    buyByCard = (itemRow, itemCol, price) => {
        if (this.items[itemRow - 1][itemCol - 1].quantity === 0) {
            return 'No item atm sorry'
        } else {
            this.total = + price
            return 'Success my friend take ur item'
        }

    }

    showBalance = () => {
        return this.total
    }

    showChanges = () => {
        return this.changes
    }

    showProfit = () => {
        return this.total - this.init
    }

}