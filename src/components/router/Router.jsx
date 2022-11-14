import { Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "../ItemDetail"
import { ItemListContainer } from "../ItemList"
import { Destacados } from "../Destacados/DestacadosContainer"
import { Indumentaria } from "../Indumentaria/Indumentaria"
import { Juguetes } from "../Juguetes/JuguetesContainer"
import { Perfil } from "../Perfil/Perfil"
import {Cart} from "../Cart"

export const Router = ()=>{

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/perfil' element={<Perfil/> }/>
            <Route path='/carrito' element={<Cart />}/>
            <Route path='/juguetes' element={ <Juguetes/>}/>
            <Route path='/indumentaria' element={<Indumentaria />}/>
            <Route path='/destacados' element={<Destacados/> }/>
            <Route path='/inicio' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
            <Route path='/*' element={<ItemListContainer />}/>
        </Routes>
    )
}