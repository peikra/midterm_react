import { useNavigate } from "react-router-dom"


const Admin = ()=>{
    const newproduct = ()=>{
        navigate("/new_product")
        
    }
    const navigate = useNavigate()
    return(
        <button onClick={newproduct }>For_admin</button>
    )
}

export default Admin