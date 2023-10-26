import { createBrowserRouter } from 'react-router-dom'
import Login from '../page/Login'
import Home from '../page/Home'
import NotFound from '../page/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default router