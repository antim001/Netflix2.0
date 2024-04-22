import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from './../provider/AuthProvider';
import { auth } from './../firebase/firebase.config';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut(auth)
        .then('')
        .catch(error)
      }
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute  top-0 left-0 '>
           <h1  className='text-red-600 text-4xl font-bold cursor-pointer'><Link>NETFLIX</Link></h1> 
        <div>
        <button className='text-white pr-4'><Link to='/mylist'>My List</Link></button>
            {
                user?.email?<button  onClick={handleLogout} className='text-white pr-4'>Log out</button>:<button className=' px-6 py-2 cursor-pointer text-white'><Link to='/signin'>Sign In</Link></button>
            }
            <button className='bg-red-600 px-6 py-2 cursor-pointer text-white'><Link to='/signup'>Sign Up</Link></button>
        </div>
        
        </div>
    );
};

export default Navbar;