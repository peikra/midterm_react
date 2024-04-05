import axios from "axios"
import "./products.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import AuthContext from "../../Contexts/AuthContext"
import { useQuery } from "react-query"
import request from "../../utils/request"
import Admin from "../../Admin"
import Delete from "../../Admin/delete_product"
import Header from "../../Header"




const Products = ()=>{

    
    const navigate = useNavigate()
    
    
    
    
    
    
   
 

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
    
const role = sessionStorage.getItem("role")
    
  
     

    
  

    return(
        <div>
             <Header />

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