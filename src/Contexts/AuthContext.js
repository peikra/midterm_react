import { createContext } from "react";

const userinfo = sessionStorage.getItem('user')
const AuthContext = createContext({
    user : userinfo,
})



export default AuthContext