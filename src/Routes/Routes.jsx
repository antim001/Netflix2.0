import {createBrowserRouter,} from "react-router-dom";
import Home from './../Pages/Home';
import SignIn from './../Pages/SignIn';
import Layout from './../Layout/Layout';
import SignUp from '../Pages/SignUp'
import MyList from './../Pages/MyList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/mylist',
        element:<MyList></MyList>
      }
    ]
  }
]);
  export default router;
  