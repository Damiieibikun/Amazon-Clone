import axios from "axios";
import { createContext, useContext, useState } from "react";
import { APIcontext } from "./APIContext";

export const cartContext = createContext()
export const CartProvider = ({children})=>{
    const {baseURL, currentUserInfo} = useContext(APIcontext)

    const [cartItems, setCartItems] = useState([])
    const [cartItemsLength, setCartItemsLength] = useState(0)
    const [sideCartLoader, setSideCartLoader] = useState(true)
    const [cartLoader, setCartLoader] = useState(true)


    // get cart items
    const getCartItems = async()=>{
        if(currentUserInfo){
            try {
                const response = await axios.get(`${baseURL}/carts?user_id=${currentUserInfo.id}`)
                // console.log(response)
                if(!response.data.msg){
                    setCartItems(response.data)
                    setCartItemsLength(response.data[0].products.length)
                }
                setSideCartLoader(false)
                setCartLoader(false)
              
            } catch (error) {
                console.log('Error says: ', error)
            }
        }
       
    }

    
    // post a cart
    const addCart = async(data)=>{
        console.log(`${baseURL}/carts`)
        try {
            const response = await axios.post(`${baseURL}/carts`, data)
            console.log(response)
            if(response.data.code === 200){
                getCartItems()
            }
            
        } catch (error) {
            console.log('Error says: ', error)
        }
        
    }

    // handle select
    const [quantityChosen, setQuantityChosen] = useState(1)
        const handleSelectQuantity = (e)=>{
        const {value} = e.target
        setQuantityChosen(value)
        }


    // simulate edit

    const handleEditCartInfo = (e, id)=>{
        const {value} = e.target
        const data = {
            quantity: parseInt(value),
            user_id: currentUserInfo.id,
            product_id: id,
            has_variation: false
        }
        addCart(data)
    }
    


    // delete cart content
    const deleteCartItems = async()=>{
        try {
            const response = await axios.delete(`${baseURL}/carts`, {user_id: currentUserInfo.id})
            console.log(response)
        } catch (error) {
            console.log('Error says: ', error)
        }
    }

    // proceed to checkout

    const [checkoutLoader, setCheckOutLoader] = useState(false)
    const [checkoutMsg, setCheckOutMsg] = useState('')
    const checkOutCart = async(data)=>{
        setCheckOutLoader(true)
        try {
            const response = await axios.post(`${baseURL}/carts/checkout`, data)
            console.log(response)
            if(response.data.code === 200){
                setTimeout(() => {
                    setCheckOutMsg('Check Out Successfull')
                }, 2000);
               
            }
            
            
        } catch (error) {
            console.log('Error says: ', error)
        } 
        setCheckOutLoader(false)
    }


    // get all orders
    const [usersOrders, setUsersOrders] = useState([])
    
    const getUsersOrders = async()=>{
        try {
            const response = await axios.get(`${baseURL}/users/orders?user_id=${currentUserInfo.id}`)
            if(response.data.msg){
                console.log(response.data.msg)
            }
            else{
                setUsersOrders(response.data.data)
            }
        } catch (error) {
            console.log('Error says: ', error)
        }
    }





    const values = {
        addCart,

        getCartItems,
        cartItems,

        cartLoader,
        sideCartLoader,
        cartItemsLength,
        setCartItemsLength,

        quantityChosen,
        setQuantityChosen,
        handleSelectQuantity,
        handleEditCartInfo,

        deleteCartItems,
        checkOutCart,
        checkoutLoader,
        checkoutMsg,
        setCheckOutMsg,
        getUsersOrders,
        usersOrders

    }
    return(
       <cartContext.Provider value={values}>
        {children}
       </cartContext.Provider>
    )
}