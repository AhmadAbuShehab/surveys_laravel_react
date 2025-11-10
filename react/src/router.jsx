import { createBrowserRouter } from "react-router-dom"; 
import Dashboard from "./views/Dashboard.jsx";
import Survays from "./views/Survays.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import { Navigate } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children:[
        {
            path: 'dashboard',
            element: <Navigate to='/' />
        },
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'survays',
            element: <Survays />
        }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'signup',
            element: <Signup />
        }
    ]


  }
])

export default router;