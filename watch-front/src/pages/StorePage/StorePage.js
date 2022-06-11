import React from 'react';
import styles from '../StorePage/StorePage.module.scss';
import Card from '../../components/Card/Card'
import Loader from "../../components/Loader/Loader"
import axios from 'axios';
import { GlobalState } from '../../GloabalState'


const StorePage = ({ filters }) => {
    const state = React.useContext(GlobalState)

    const [loading, setLoading] = React.useState(false)
    const [messageProduct, setMessageProduct] = React.useState(false)
    const [items, setItems] = React.useState([])
    const [url, setUrl] = React.useState('')
    const [cart, setCart] = state.cart
    const [filterList, setFilterList] = React.useState({
        Series: [],
        Size: [],
        Color: []
    })

    React.useEffect(() => {
        const getWatches = async () => {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:9000/watches-name${url}`)
            if (localStorage.getItem("favorite")) {
                const favoriteFromStorage = JSON.parse(localStorage.getItem("favorite"))

                const resultData = data.map(item => {
                    return favoriteFromStorage.find(({ _id }) => _id === item._id) || item
                })
                setItems(resultData)
            } else {
                setItems(data)
            }
            items.length === 0 && setMessageProduct(true)

            setLoading(false)
        }
        getWatches()

    }, [url])


    React.useEffect(() => {
        transformURL()
    }, [filterList])

    const filtersKey = Object.keys(filters);

    const transformURL = () => {
        let result = []
        filtersKey.map(key => {
            if (filterList[key].length > 0) {
                filterList[key].map(arr => {
                    return result.push(`filter.${key}[]=${arr}`)
                })
            }
        })

        const resultUrl = `?${result.toString().replace(/,/g, "&")}`
        setUrl(resultUrl)
    }


    const handleFilter = (e, key) => {
        if (e.target.value === key) {
            setFilterList(prev => {
                if (e.target.checked) {
                    return {
                        ...filterList,
                        [key]: [...prev[key], e.target.name]
                    }
                }
                else if (!e.target.checked) {
                    const result = filterList[key].filter(item => item !== e.target.name)

                    setFilterList({
                        ...filterList,
                        [key]: result
                    })
                }
            })
        }
    }

    const addToCart = (product) => {
        const productExist = cart.find(item => item._id === product._id)
        if (productExist) {
            const result = cart.map(item => item._id === product._id ? { ...productExist, quantity: productExist.quantity + 1 } : item)
            localStorage.setItem('cart', JSON.stringify(result))
            setCart(JSON.parse(localStorage.getItem('cart')))
        } else {
            const result = [...cart, { ...product, quantity: 1 }]
            localStorage.setItem('cart', JSON.stringify(result))
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }


    return (

        <div className={styles.store}>
                <h1 className={styles.storeTitle}> Choose your Apple Watch </h1>
                <div className={styles.storeWrapper}>
                    <div className={styles.storeInner}>
                        <div className={styles.storeLeft}>
                            <div className={styles.storeFilter}>
                                <h3 className={styles.storeLeftTitle}> Apple Watch </h3>
                                {filtersKey.map((key, index) => {
                                    return (
                                        <div key={index}>
                                            <h4 className={styles.storeLeftFilterTitle}>{key}</h4>
                                            {filters[key].map((item) => {
                                                return (
                                                    <label key={item.id} className={styles.storeLeftLabel}>
                                                        <input
                                                            className={styles.storeLeftBox}
                                                            type="checkbox"
                                                            name={item.id}
                                                            value={[key]}
                                                            id={item.id}
                                                            onChange={(e) => handleFilter(e, key)}
                                                        />
                                                        <span>{item.name}</span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={styles.storeRight}>
                            { loading ? <Loader/> :
                                items.map((item, _id) => (
                                    <Card
                                        key={item._id}
                                        item={item}
                                        _id={item._id}
                                        path={item._id}
                                        addToCart={() => addToCart(item)}
                                    />
                                ))
                            }
                            {messageProduct && <p style={{ padding: "100px", fontWeight: "500", fontSize: "28px", color: "#ff666689" }}>
                                No products found for the corresponding categories
                            </p>}
                        </div>

                    </div>
                </div>
            </div>

    )
}

export default StorePage;