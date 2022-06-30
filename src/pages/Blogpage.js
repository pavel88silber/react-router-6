import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Blogpage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <>
            {posts.map(post =>
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            )}

        </>
    )
}

export default Blogpage