import { useContext, useState } from "react"
import AuthContext from "../Contexts/AuthContext"
import { NavLink, useNavigate } from "react-router-dom"
import Admin from "../Admin"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { logoutUser } from "../Redux/actions"

const Header = () =>{
    const {user,setuser} = useContext(AuthContext)
    
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const logout = ()=>{
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("token")
        navigate("/login")
        setuser(null)
        dispatch(logoutUser())
        

    }

    const token = sessionStorage.getItem('token')
    const [name,setname] = useState("")
    const [role,setrole] = useState("")
    const[image,setimage] = useState("")
    
    axios({
        method : "GET",
        url : " https://api.escuelajs.co/api/v1/auth/profile",
        
        headers:{
            "Authorization" : `Bearer ${token} `
        }

       }).then((res)=>{
        
        setname(res.data.name)
        setrole(res.data.role)
        setimage(res.data.avatar)
        
       })

       sessionStorage.setItem("role",role)

    return(
    <header className="header">
        <div className="headerdiv">
            <h1>{name}</h1>
            {role=='admin' ? <Admin/> : <img className="avatar" src={image}  />}
            <NavLink className="movies" to="/movies">Movies</NavLink>
            <NavLink className="products" to= "/products">Products</NavLink>
            
            
            <button onClick={logout} className="logout">Log out</button>


        </div>


    </header>
    )
    
}

export default Header
