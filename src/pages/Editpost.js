import React from 'react'
import { useParams } from 'react-router-dom'

const Editpost = () => {
    const { id } = useParams()

    return (
        <>
            <h2 style={{ margin: "20px" }}>Editpost # {id}</h2>
            <p>{id}</p>
        </>
    )
}

export default Editpost