import axios from "axios";
import validateEmail from "../../Email";
import "./register.css"
import {useState} from "react"; 
import { useNavigate } from "react-router-dom"

 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 




const Registration = ()=>{
    const [firstName, setFirstName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState(""); 
 const [image,setimage] = useState("")

 const navigate = useNavigate()


 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && password.length>6
     
     
   ); 
 }; 
 

 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   axios({
    method : "POST",
    url : "https://api.escuelajs.co/api/v1/users/",
    
    data : {
        "name" : firstName,
        "email" : email,
        "password" : password,
        "avatar": image ? image : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    }
   }).then((res)=>{
    console.log(res)
   })
   
   navigate("login")

 }; 
    return(
        <div className="register"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
     
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             
             type="password" 
             value={password}
             onChange={(e) => { 
               setPassword(e.target.value ); 
               console.log(e.target.value)
             }} 
            
             placeholder="Password" 
           /> 
          
         </div> 
         <div className="Field"> 
           <label> 
             image address <sup>*</sup> 
           </label> 
           <input 
             value={image} 
             onChange={(e) => { 
               setimage(e.target.value); 
             }} 
             placeholder="Image Address" 
           /> 
         </div> 
        
         <button type="submit" disabled={!getIsFormValid()} > 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
    )
}

export default Registration