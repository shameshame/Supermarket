const initialValue=0;


export let totalItems = (cart)=>cart.reduce((accumulator,current)=>accumulator+current.quantity,
initialValue)

export let totalPrice = (cart)=>cart.reduce((accumulator,current)=>
accumulator+current.quantity*current.price,
initialValue)