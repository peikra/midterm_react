import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";


const Login = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user,setuser} = useContext(AuthContext)
    const navigate = useNavigate()

    const [info,setinfo] = useState('')

    
    

   
  

    

    const onSubmit = (data) => {
        
        console.log(data)
        axios({
            method : "POST",
            url : "https://api.escuelajs.co/api/v1/auth/login",
            
            data : {
                
                "email" : data.email,
                "password" : data.password,
                
        
            }
           }).then((res)=>{
            console.log(res)
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('products')
            const info = JSON.stringify(data)
            setinfo(info)
            const loggedInUser = sessionStorage.getItem('user');
            setuser(loggedInUser);

            const token = res.data.access_token
            sessionStorage.setItem("token",token)
            
            
           })
           
    };
    return(
        <>
        

        <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Login</p>
            
            <input placeholder="Email" type="email" {...register("email", { required: true })} />
            {errors.email && <span style={{ color: "red" }}>
                *Email* is mandatory </span>}
            <input placeholder="Password" type="password" {...register("password")} />
            <input className="submit" type={"submit"} value="Login"  />
        </form>
    </>
        
    )
}

export default Login