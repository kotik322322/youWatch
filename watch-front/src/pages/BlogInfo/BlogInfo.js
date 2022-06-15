import React from 'react'
import styles from "./BlogInfo.module.scss"
import axios from "axios"
import { useParams } from "react-router-dom"

const BlogInfo = () => {
  const { _id } = useParams()

  const [inform, setInform] = React.useState('')

  console.log(inform);
  React.useEffect(() => {
    const getBlogItems = async () => {
      const { data : {info} } = await axios.get(`http://localhost:9000/blog/${_id}`)

      setInform(info)
    }
    getBlogItems()
  }, [])


  return (
    <div className={styles.blog}>
        <div className={styles.blogWrapper} dangerouslySetInnerHTML={{__html: inform}}></div>
    </div>
  )
}

export default BlogInfo

