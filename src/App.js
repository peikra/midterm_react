import logo from './logo.svg';
import './App.css';
import Registration from './Pages/Registration';
import Navigation from "./Components/Navigation/index";
import PublicRoutes from "./Routes/PublicRoute"
import AuthContext from './Contexts/AuthContext';
import { useState } from 'react';
import PrivateRoute from "./Routes/PrivateRoute"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './/Redux/reducer';
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
  const store = createStore(rootReducer)
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      
      
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
      </Provider>
    </QueryClientProvider>
   
  );
}

export default App;
