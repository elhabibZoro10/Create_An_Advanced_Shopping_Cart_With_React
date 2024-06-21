import { createContext, useContext, useState } from "react"

 const ShoppingCardContext =  createContext({})
const ShoppingCardProvider = ({children}) => {
    const [cardItems , setCardItems] = useState([{}])
    const getItemsQuantity = (id) => {
      return cardItems.find((item) => {item.id === id})?.quantity || 0
    }
    const increaseCardQuantity = (id) => {
      setCardItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null ) {
          return [...currItems, {id , quantity: 1}]
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return {...item , quantity: item.quantity + 1}
            } else {
              return item
            }
          })
        }
      })
    }

    const decreaseCardQuantity = (id) => {
      setCardItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null ) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return {...item , quantity: item.quantity - 1}
            } else {
              return item
            }
          })
        }
      })
    }
    
    const removeItemFromCard = (id) => {
      setCardItems((currItems) => currItems.filter((item) => item.id !== id))
    }
  return (
    <ShoppingCardContext.Provider value={{cardItems , getItemsQuantity , increaseCardQuantity , decreaseCardQuantity , removeItemFromCard }} >
    {children}
    </ShoppingCardContext.Provider>
  )
}
export default ShoppingCardProvider
export const useShoppingCard = () => {
    return useContext(ShoppingCardContext)
}
