import React from 'react';
import styles from './Blog.module.scss';
import axios from "axios"



const Blog = () => {
    const [items, setItems] = React.useState([])

    const getBlogItems = async () => {
        const { data } = await axios.get("http://localhost:9000/blog")
        setItems(data)
    }

    React.useEffect(() => {
        getBlogItems()
    }, [])

    return (
        <div className={styles.blog}>
            <h2 className={styles.blogTitle}> Blog </h2>

            <div className={styles.blogWrapper}>

                {items.map(item => (
                    <div className={styles.blogItem} key={item._id}>

                        <img className={styles.blogImg} src={item.mainImg} alt="imgFirstBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> {item.title} </h4>
                            <p className={styles.blogText}>{item.text}</p>
                            <a className={styles.blogLink} href='#'>Learn more ⋙ </a>
                        </div>

                    </div>
                ))}



            </div>


        </div>
    )
}



export default Blog;