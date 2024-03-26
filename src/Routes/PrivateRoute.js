import { Route, Routes } from "react-router-dom"
import Products from "../Pages/Products"
import Login from "../Pages/Login"
import CurrentProduct from "../Pages/Products/currentproduct"
import New_Product from "../Admin/new_product"

const PrivateRoute = ()=>{
    return(
        <Routes>
            <Route path="login/products" element={<Products/>} />
            <Route path="login" element={<Login/>} />
            <Route path="new_product" element={<New_Product/>} />
            <Route path='login/products/:title/:id' element={<CurrentProduct/>}  />
            <Route path="*" element={<h1>errrror</h1>} />



        </Routes>
    )
}

export default PrivateRoute