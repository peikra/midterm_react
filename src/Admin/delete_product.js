import axios from "axios"

const Delete = ({id})=>{

    const delete1 = ()=>{
        axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
    }

    return(
        <button onClick={delete1}  >Delete Product</button>
    )
}

export default Delete