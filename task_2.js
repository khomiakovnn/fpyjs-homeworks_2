const items = {
    1: {
        id: 1,
        name: "Name1",
        descriptio: "Description1",
        sizes: ['S', 'M', 'L', 'XL',],
        price: 100,
        available: true,   
    },
    2: {
        id: 2,
        name: "Name2",
        descriptio: "Description2",
        sizes: ['M', 'L', 'XL',],
        price: 200,
        available: true,   
    },
    3: {
        id: 3,
        name: "Name3",
        descriptio: "Description3",
        sizes: ['S', 'M', 'L', ],
        price: 300,
        available: true,   
    },
    4: {
        id: 4,
        name: "Name4",
        descriptio: "Description4",
        sizes: [],
        price: 400,
        available: false,   
    },
    5: {
        id: 5,
        name: "Name5",
        descriptio: "Description5",
        sizes: [],
        price: 500,
        available: false,
    },
}

const basket = [
    {
        good: items[1],
        amount: 3,
    },
    {
        good: items[2],
        amount: 2,
    },
]

function addItem(id, quantity) {
    let record = {}
    record.good = items[id]
    record.amount = quantity
    basket.push(record)
}

function delItem(id){
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].good.id == id) {
            basket.splice(index, 1)
            break}           
        
        
    }
}

function clearBasket() {
    basket.splice(0,basket.length)
}

function countBasket() {
    const result = {}
    let totalAmount = 0
    let totalSumm = 0
    for (let index = 0; index < basket.length; index++) {
        totalAmount =  totalAmount + basket[index].amount
        totalSumm = totalSumm + basket[index].good.price * basket[index].amount
    }
    result.totalAmount = totalAmount
    result.totalSumm = totalSumm
    return result
}

// addItem(1,2)
// delItem(2)
// clearBasket()

console.log(countBasket())
