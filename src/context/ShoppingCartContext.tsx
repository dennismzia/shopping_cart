import { ReactNode, createContext, useContext } from 'react'


type shoppingCartProviderProps = {
    children: ReactNode
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