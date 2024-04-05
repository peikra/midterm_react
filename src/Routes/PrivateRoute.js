import { Route, Routes } from "react-router-dom"
import Products from "../Pages/Products"
import Login from "../Pages/Login"
import CurrentProduct from "../Pages/Products/currentproduct"
import New_Product from "../Admin/new_product"
import ErrorPage from "../Pages/ErrorPage"
import Movies from "../Pages/Movies"
import Currentmovie from "../Pages/Movies/current"

const PrivateRoute = ()=>{
    return(
        <Routes>
            <Route path="/products" element={<Products/>} />
            <Route path="login" element={<Login/>} />
            <Route path="new_product" element={<New_Product/>} />
            <Route path='/products/:title/:id' element={<CurrentProduct/>}  />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/movies/:title/:imdbId" element={<Currentmovie/>} />
            <Route path="*" element={<ErrorPage/>} />



        </Routes>
    )
}

export default PrivateRoute