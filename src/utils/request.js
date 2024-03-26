import axios from "axios";



export default async function request(){
    return await axios.get("https://api.escuelajs.co/api/v1/products").then((res)=>{
        // console.log(res)
    })
}