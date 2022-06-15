import React from 'react'
import styles from "./BlogInfo.module.scss"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const BlogInfo = () => {
  const { _id } = useParams()

  const [inform, setInform] = React.useState('')

  console.log(inform);
  React.useEffect(() => {
    const getBlogItems = async () => {
      const { data: { info } } = await axios.get(`http://localhost:9000/blog/${_id}`)

      setInform(info)
    }
    getBlogItems()
  }, [])

  const navigate = useNavigate()
  const goBack = () => {
      navigate("/blog", { replace: true })
  }

  return (
    <div className={styles.blog}>
      <button className="goBack" onClick={goBack}> &#10094; Back</button>
      <div className={styles.blogWrapper} dangerouslySetInnerHTML={{ __html: inform }}></div>
    </div>
  )
}

export default BlogInfo

