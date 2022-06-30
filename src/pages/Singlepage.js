import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Singlepage = () => {
    // useParams() Hook to get params from Route (can be many params blog/post/article...)
    const { id } = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <>
            <h1 style={{ margin: "20px" }}>{post.title}</h1>
            <p style={{ margin: "20px" }}>{post.body}</p>
            <p style={{ marginLeft: "20px" }}>{"id: #000" + `${post.id}`}</p>
            <hr />
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
    )
}

export default Singlepage