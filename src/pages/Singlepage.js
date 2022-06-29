// useParams() Hook to get params from Route (can be many params blog/post/article...)
import { useParams } from 'react-router-dom'

import React from 'react'

const Singlepage = () => {

    const { id } = useParams()

    return (
        <div>
            {id}
        </div>
    )
}

export default Singlepage