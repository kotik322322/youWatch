import React, {createContext} from 'react';
import axios from "axios"

export const GlobalState = createContext()


export const DataProvider = ({children}) => {

    const [products, setProducts] = React.useState([])
    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [favorite, setFavorite] = React.useState(JSON.parse(localStorage.getItem('favorite')) || [])


    React.useEffect(() => {
        const getItems = async () => {
            const {data} = await axios.get("http://localhost:9000/watches")
            setProducts(data)
        }
        getItems()
    }, [])



    const state = {
        products : [products, setProducts],
        cart : [cart, setCart],
        favorite : [favorite, setFavorite]
    }



    return (
        <GlobalState.Provider value = {state}>
            {children}
        </GlobalState.Provider>
    )
}