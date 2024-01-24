import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const BlogDetail = () => {
    const [blog , setBlog] = useState(blogList) 
    const {id} = useParams()
    const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>

    <PageHeader title={"Single Blog Page"} curpage={"Blog / Blog Details"}/>

    </div>
  )
}

export default BlogDetail