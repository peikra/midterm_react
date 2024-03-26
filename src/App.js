import logo from './logo.svg';
import './App.css';
import Registration from './Pages/Registration';
import Navigation from "./Components/Navigation/index";
import PublicRoutes from "./Routes/PublicRoute"
import AuthContext from './Contexts/AuthContext';
import { useState } from 'react';
import PrivateRoute from "./Routes/PrivateRoute"
import Products from './Pages/Products';
import Login from './Pages/Login';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


function App() {
  const queryClient = new QueryClient()
  const [user,setuser] = useState(sessionStorage.getItem('user'))
  return (
    <QueryClientProvider client={queryClient}>
      
      
      <AuthContext.Provider value={{user,setuser}}>
      <div className="App">
        <header className="App-header">


        {user ? null : <Navigation />} 
        
        </header>
        <main>
        
        { user ? <PrivateRoute/> : <PublicRoutes/> }
        

        </main>
      </div>
      </AuthContext.Provider>
    </QueryClientProvider>
   
  );
}

export default App;
