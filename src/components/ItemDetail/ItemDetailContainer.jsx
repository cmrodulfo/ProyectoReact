import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import {ItemDetail} from "./"

export const ItemDetailContainer =()=>{

    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() =>{
        fetch('/catalogue.json')
        .then(res=>res.json())
        .then(data => {

            const getItem = data.find(product => product.id === id)
            setItem(getItem)
        }
            
            )

    },[id])


    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}