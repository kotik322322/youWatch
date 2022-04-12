import React from 'react';
import styles from '../StorePage/StorePage.module.scss';
import Card from '../Card/Card'
import axios from 'axios';



const StorePage = () => {

    const size = [
        "40 mm", "41 mm", "44 mm", "45 mm"
    ]
    const series = [
        "Series 7", "Series 6", "Series SE"
    ]
    const colors = [
        " Black", " Midnight", "Starlight", "Silver", "Space Gray", "Gold", "Red", "Green", "Blue"
    ]


    const [items, setItems] = React.useState([])
    const [filter, setFilter] = React.useState([])
    const [filterCheck, setFilterCheck] = React.useState(false)




    React.useEffect(() => {
        const getWatches = async () => {
            const { data } = await axios.get('http://localhost:9000/watches')
            setItems(data)
        }
        getWatches()


    }, [])


    const filterBySeries = (index) => {
        const filtered = items.filter(item => item.currentSeries === series[index])

        setFilter(prev => [...prev, ...filtered])
        setFilterCheck(!filterCheck)

    }


    console.log(filter);



    return (

        <div className={styles.store}>
            <h1 className={styles.storeTitle}> Choose your Apple Watch </h1>

            <div className={styles.storeWrapper}>
                <div className={styles.storeInner}>

                    <div className={styles.storeLeft}>
                        <div className={styles.storeFilter}>
                            <h3 className={styles.storeLeftTitle}> Apple Watch </h3>

                            {series.map((item, index) => (
                                <label key={index} className={styles.storeLeftLabel}>
                                    <input
                                        onChange={() => filterBySeries(index)}
                                        type="checkbox"
                                        className={styles.storeLeftBox} />
                                    <span> {item}</span>
                                </label>
                            ))}

                        </div>

                        <div className={styles.storeFilter}>
                            <h3 className={styles.storeLeftTitle}> Size </h3>

                            {size.map((item) => (
                                <label key={item} className={styles.storeLeftLabel}>
                                    <input type="checkbox" className={styles.storeLeftBox} />
                                    <span> {item} </span>
                                </label>
                            ))}
                        </div>


                        <div className={styles.storeFilter}>

                            <h3 className={styles.storeLeftTitle}> Colors </h3>

                            {colors.map((item) => (
                                <label key={item} className={styles.storeLeftLabel}>
                                    <input type="checkbox" className={styles.storeLeftBox} />
                                    <span> {item} </span>
                                </label>
                            ))}
                        </div>

                    </div>


                    <div className={styles.storeRight}>
                        {filterCheck === true ?
                            filter.map((item, _id) => (
                                <Card
                                    key={item._id}
                                    name={item.name}
                                    imageUrl={item.imageUrl[0]}
                                    price={item.price}
                                />
                            ))

                            : items.map((item, _id) => (
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

