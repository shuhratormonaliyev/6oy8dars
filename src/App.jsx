import React, {useEffect, useState} from "react";
import { Router , Route , useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Login from './pages/ErrorPage';
import Home from './pages/Home';

function App() {
const [token, setToken] = useState('');
const navigate = useNavigate();

useEffect(function () {
  if(localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
  }
}, []);


function ProtectedRoute({food , children}) {
  if (!food) {
    navigate('./login');
  }
  return children;
}

  return(
    <div>
      <Routes>
        <Route path="/regiter" element = {<Register></Register>}></Route>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route index element = {<ProtectedRoute food={token ? true : false}>
          <Home></Home>
          </ProtectedRoute>}></Route>


        <Route path="*" element = {<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
    )
}

export default App