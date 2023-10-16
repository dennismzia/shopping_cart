import { ReactNode, createContext, useContext, useState } from 'react'


type shoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {

    getItemQuantity: (id: number)=> number
    increaseCartQuantity: (id: number)=> void
    decreaseCartQuantity: (id: number)=> void
    removeFromCart: (id: number)=> void
}

const shoppingCartContext = createContext({} as ShoppingCartContext )


export const useshoppingCart = () => {
    return useContext(shoppingCartContext)
}

export const ShoppingCartProvider = ({children}:shoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState <CartItem[]>([])

    return(
        <shoppingCartContext.Provider value={{}}>
            {children}
        </shoppingCartContext.Provider>
    )

}