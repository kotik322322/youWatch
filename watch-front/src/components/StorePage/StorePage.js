import React from 'react';
import styles from '../StorePage/StorePage.module.scss';
import Card from '../Card/Card'
import axios from 'axios';




const StorePage = () => {

    const filters = {
        "Series": [
            {
                "id": 'series7',
                "name": 'Series 7',
                "checked": false
            },
            {
                "id": 'series6',
                "name": 'Series 6',
                "checked": false
            },
            {
                "id": 'seriesSE',
                "name": 'Series SE',
                "checked": false
            }
        ],
        "Size": [
            {
                "id": '40',
                "name": '40 mm',
                "checked": false
            },
            {
                "id": '41',
                "name": '41 mm',
                "checked": false
            },
            {
                "id": '44',
                "name": '44 mm',
                "checked": false
            },
            {
                "id": '45',
                "name": '45 mm',
                "checked": false
            },
        ],
        "Color": [
            {
                "id": 'black',
                "name": 'Black',
                "checked": false
            },
            {
                "id": 'red',
                "name": 'Red',
                "checked": false
            },
            {
                "id": 'midnight',
                "name": 'Midnight',
                "checked": false
            },
            {
                "id": 'starlight',
                "name": 'Starlight',
                "checked": false
            },
            {
                "id": 'silver',
                "name": 'Silver',
                "checked": false
            },
            {
                "id": 'spaceGray',
                "name": 'Space Gray',
                "checked": false
            },
            {
                "id": 'gold',
                "name": 'Gold',
                "checked": false
            },
            {
                "id": 'green',
                "name": 'Green',
                "checked": false
            },
            {
                "id": 'blue',
                "name": 'Blue',
                "checked": false
            },
        ]
    };


    const [items, setItems] = React.useState([])

    const [currentFilters, setCurrentFilters] = React.useState(filters)
    const [filterList, setFilterList] = React.useState({
        // Series: ["series7", "series6"],
        // Size: ["41", "40"],
        // Color: ["red", "black"]
        Series: [],
        Size: [],
        Color: []
    })
    const [url, setUrl] = React.useState('')
    // console.log(filterList);
    // console.log(url);

    const filtersKey = Object.keys(filters);

    const transformURL = () => {
        let result = []
        if (filterList.Series.length > 0) {
            filterList.Series.map(arr => {
                return result.push(`filter.Series[]=${arr}`)
            })
        }
        if (filterList.Size.length > 0) {
            filterList.Size.map(arr => {
                return result.push(`filter.Size[]=${arr}`)
            })
        }
        if (filterList.Color.length > 0) {
            filterList.Color.map(arr => {
                return result.push(`filter.Color[]=${arr}`)
            })
        }
        // `?${result.toString().replace(/,/g, "&")}`
        const resultUrl = `?${result.toString().replace(/,/g, "&")}`

        setUrl(resultUrl)
    }

    React.useEffect(() => {
        const getWatches = async () => {
            const { data } = await axios.get(`http://localhost:9000/watches-name${url}`)
            setItems(data)
        }
        getWatches()

    }, [url])

    React.useEffect(() => {
        transformURL()
    }, [filterList])



    const handleFilter = e => {
        switch (e.target.value) {
            case 'Series': {
                setFilterList(prev => {
                    if (e.target.checked) {
                        return {
                            ...filterList,
                            Series: [...prev.Series, e.target.name]
                        }
                    }

                    else if (!e.target.checked) {
                        const result = filterList.Series.filter(item => item !== e.target.name)

                        setFilterList({
                            ...filterList,
                            Series: result
                        })
                    }
                })
                break
            }

            case 'Size': {
                setFilterList(prev => {
                    if (e.target.checked) {
                        return {
                            ...filterList,
                            Size: [...prev.Size, e.target.name]
                        }
                    }

                    else if (!e.target.checked) {
                        const result = filterList.Size.filter(item => item !== e.target.name)

                        setFilterList({
                            ...filterList,
                            Size: result
                        })
                    }
                })
                break
            }

            case 'Color': {
                setFilterList(prev => {
                    if (e.target.checked) {
                        return {
                            ...filterList,
                            Color: [...prev.Color, e.target.name]
                        }
                    }

                    else if (!e.target.checked) {
                        const result = filterList.Color.filter(item => item !== e.target.name)

                        setFilterList({
                            ...filterList,
                            Color: result
                        })
                    }
                })
                break
            }
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


                            <form action="">
                                {filtersKey.map((key) => {
                                    return (
                                        <>

                                            <h4>{key}</h4>
                                            {currentFilters[key].map((item) => {
                                                return (
                                                    <label key={item.id} className={styles.storeLeftLabel}>
                                                        <input
                                                            className={styles.storeLeftBox}
                                                            type="checkbox"
                                                            name={item.id}
                                                            value={[key]}
                                                            id={item.id}
                                                            onChange={(e) => handleFilter(e)}
                                                        />
                                                        <span>{item.name}</span>
                                                    </label>
                                                );
                                            })}
                                        </>
                                    );
                                })}
                            </form>

                        </div>

                    </div>


                    <div className={styles.storeRight}>
                        {items.length === 0 && <p style={{ textAlign: "center", fontWeight: "500", fontSize: "25px" }}>No products found for the corresponding categories</p>}

                        {

                            items.map((item, _id) => (
                                <Card
                                    key={item._id}
                                    name={item.name}
                                    imageUrl={item.imageUrl[0]}
                                    price={item.price}
                                />
                            ))
                        }

                    </div>


                </div>
            </div>
        </div>




    )
}


export default StorePage;