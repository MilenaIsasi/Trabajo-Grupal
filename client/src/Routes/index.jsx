import { createBrowserRouter} from 'react-router-dom'
import FormLogin from '../components/FormLogin';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import Layout from '../layouts/Layout';
import LayoutPanel from '../layouts/LayoutPanel';
import AddCarrito from '../screens/AddCarrito';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Home from '../screens/Home';
=======
>>>>>>> edfcf25f668878abcae747764a23b70cd3a594d9
import AdministrarProductos from '../screens/AdminPanel/AdministrarProductos';
import AdministrarUsuarios from '../screens/AdminPanel/AdministrarUsuarios';
import AdminPanel from '../screens/AdminPanel/AdminPanel';
import { Homescreen } from '../screens/Homescreen';
>>>>>>> a0a99cef5e960db1851b44bf1be0a472a86a61fe


export const  router =  createBrowserRouter([
    {   path: '/',
        index: true,
        element: <FormLogin />,
    },
    {
        path:'register',
        element: <Register />
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path:'add',
                element: <AddCarrito />
            },
            {
                path:'home',
                element: <Home />
            },
        ]
    },
    {
        path: '/cpanel',
        element: <LayoutPanel />,
        errorElement: <NotFound />,
        children: [
            {
                path:'adm',
                element: <AdminPanel />
            },
        ]
    },
    {
        path: '/cpanel',
        element: <LayoutPanel />,
        errorElement: <NotFound />,
        children: [
            {
<<<<<<< HEAD
                path:'adm',
                element: <AdminPanel />
            },
            {
=======
>>>>>>> edfcf25f668878abcae747764a23b70cd3a594d9
                path:'adm/users',
                element: <AdministrarUsuarios />
            },
            {
                path:'adm/products',
                element: <AdministrarProductos />
            },
        ]
    }
]);
