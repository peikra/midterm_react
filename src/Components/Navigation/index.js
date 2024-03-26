import { NavLink } from "react-router-dom"
import "./nav.css"



const Navigation = ()=>{
    const navigation = [{
        path : "/",
        name : "Registration"
      },
      {
        path : "/login",
        name : "Login"
      },
     
      ]
    return(
        
        <header className="App-header">
        
        
        <nav>
          <ul className="for_items">
            {navigation?.map((item,i) =>(
              <li key={i} >
                <NavLink to={item.path} >{item.name}</NavLink>
                
              
              </li>
            ))}
            
           
          </ul>
        </nav>
        
  
      </header>
    )
}

export default Navigation