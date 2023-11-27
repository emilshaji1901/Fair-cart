const { createSlice } = require("@reduxjs/toolkit");



const cartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //function to add item to cart
        addToCart :(state,action)=>{
            state.push(action.payload)
        }, 
        //function remove items from cart
        removeFromCart :(state,action)=>{
            return state.filter(item=>item.id !=action.payload)
        },
        //function to empty the cart
        emptyCart:(state)=>{
            return state =[]
        }
    }
})


export const {addToCart ,removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer