import { Routes,Route } from "react-router-dom"
import Registration from "../Pages/Registration"
import Login from "../Pages/Login"
import Products from "../Pages/Products"

const PublicRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Registration/>}  />
            <Route path='login' element={<Login/>}  />
            <Route path='login' element={<Login/>}  />
            <Route path="*" element={<h1>error</h1>} />
            

            
        </Routes>
    )
}

export default PublicRoutes