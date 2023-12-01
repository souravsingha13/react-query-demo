import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


const SuperHerosPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const superHerosApi = 'http://localhost:4000/superheros'

    useEffect(() => {
        axios.get(superHerosApi)
            .then((response) => {
                console.log(response)
                setData(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return (<div>Loading ...</div>)
    }
    if (error) {
        return (<div>{error}</div>)
    }
    return (
        <div>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    )
}
export default SuperHerosPage;