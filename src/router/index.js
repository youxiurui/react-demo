import { createBrowserRouter } from 'react-router-dom'
import Login from '../page/Login'
import Home from '../page/Home'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/home',
        element: <Home/>
    }
])

export default router