import Logo from '../../Assets/Google-Logo-2015-present.jpg'
import '../Login/LoginMain.scss'
import { Link } from 'react-router-dom';
import { toggleActions } from '../../Redux/store';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

        // COMPONENTS
import Form from './Form';
import FormPassword from './Formpassword';
const Login = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    let inputRef = useRef()
    let placeHolderRef = useRef()
    return (
        <div className={`form_container`}>
           <Form></Form>    
            {/* <FormPassword></FormPassword>    */}
        </div>
        
    )
}

export default Login