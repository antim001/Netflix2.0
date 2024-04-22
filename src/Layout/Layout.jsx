import {Outlet} from 'react-router-dom';
import Navbar from './../components/Navbar';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster/>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;