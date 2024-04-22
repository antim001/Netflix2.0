import {useContext} from 'react';
import { AuthContext } from './AuthProvider';
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading) return <h1 className='text-5xl'>Loading</h1>
    if(!user?.email){
        return <Navigate to='/signin'></Navigate>
    }
    return children
};

export default PrivateRoute;