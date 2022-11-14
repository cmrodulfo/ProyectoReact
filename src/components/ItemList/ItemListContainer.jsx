import { useEffect } from "react"
import { useState } from "react"
import { ItemList } from "./"

export const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        async function getData() {
            let data
            data = await fetch('/catalogue.json')
            data = await data.json()
            console.log(data)
            setDatos(data)

        }
        getData()
    }, [])

    return (

        <ItemList datos={datos} />
    )
}