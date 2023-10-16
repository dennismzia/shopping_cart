import { ReactNode, createContext, useContext } from 'react'


type shoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    
    getItemQuantity: (id: number)=> number
    increaseCartQuantity: (id: number)=> void
    decreaseCartQuantity: (id: number)=> void
    removeFromCart: (id: number)=> void
}

const shoppingCartContext = createContext({})


export const useshoppingCart = () => {
    return useContext(shoppingCartContext)
}

export const ShoppingCartProvider = ({children}:shoppingCartProviderProps) => {
    return(
        <shoppingCartContext.Provider value={{}}>
            {children}
        </shoppingCartContext.Provider>
    )

}