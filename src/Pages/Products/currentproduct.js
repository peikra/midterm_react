import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import "./current.css"

const CurrentProduct = ()=>{
    
    const params = useParams()
    
    const newproducts = useQuery({
        queryKey :'products', 
        queryFn : async ()=>{
        const resposne = await axios.get(`"https://api.escuelajs.co/api/v1/products/${params.id}"`)
        return resposne


    },staleTime : 200000000,
    refetchOnWindowFocus : false,
    refetchInterval : 2000000,
    retryOnMount : false
    

})

    const index = newproducts?.data?.data.find((element)=>element.id==params.id)
   
    return(
        <div key={index.id} className="product" >
            <img src={index.images[0]} alt={index.title} className="current_image" />
            <h1 className="current_title">{index.title}</h1>
            <p className="current_price">${index.price}</p>
            <p className="current_desc">${index.description}</p>
        </div>
    )
}

export default CurrentProduct
