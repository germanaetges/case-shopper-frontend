import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url, inicialState) => {
    const [data, setData] = useState(inicialState)

    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return { data, getData }
}