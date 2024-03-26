import axios from "axios"
import "./products.css"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import AuthContext from "../../Contexts/AuthContext"
import { useQuery } from "react-query"
import request from "../../utils/request"
import Admin from "../../Admin"
import Delete from "../../Admin/delete_product"




const Products = ()=>{

    const [name,setname] = useState("")
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    const [role,setrole] = useState("")
    const[image,setimage] = useState("")
    
    axios({
        method : "GET",
        url : " https://api.escuelajs.co/api/v1/auth/profile",
        
        headers:{
            "Authorization" : `Bearer ${token} `
        }

       }).then((res)=>{
        console.log(res)
        setname(res.data.name)
        setrole(res.data.role)
        setimage(res.data.avatar)
        
       })
    const {user,setuser} = useContext(AuthContext)
    
    

    const logout = ()=>{
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("token")
        navigate("/login")
        setuser(null)
        

    }

    const newproducts = useQuery({
        queryKey :'products', 
        queryFn : async ()=>{
        const resposne = await axios.get("https://api.escuelajs.co/api/v1/products")
        return resposne


    },staleTime : 200000000,
    refetchOnWindowFocus : false,
    refetchInterval : 2000000,
    retryOnMount : false
    

})
    
    
  
     

    
  

    return(
        <div>
             <header className="header">
                <div className="headerdiv">
                    <h1>{name}</h1>
                    {role=='admin' ? <Admin/> : <img className="avatar" src={image}  />}
                    <button onClick={logout} className="logout">Log out</button>


                </div>


            </header>

            <main>
                <div>
                    <div className="forproducts">
                        
                        {newproducts.isSuccess && newproducts.data.data?.map((product)=>(
                            
                            <div key={product.id} className="product" onClick={(e)=>{
                                
                                
                                

                                if (e.target.value===undefined){
                                    navigate(`${product.title}/${product.id}` ) 

                                }
                            
                            }
                                
                                
                                
                                }>
                                <img src={product.images[0]} alt={product.title} className="product-image" />
                                <h1 className="title">{product.title}</h1>
                                <p className="price">${product.price}</p>
                                <p className="desc">${product.description}</p>
                                {role=='admin' ? <Delete id={product.id} /> : ""}
                            </div>
                            
                            
                        ))}
                        

                    </div>
                </div>
            </main>

        </div>

       

        
        
    )
}

export default Products