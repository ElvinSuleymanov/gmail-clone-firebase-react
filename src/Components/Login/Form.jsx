import Logo from '../../Assets/Google-Logo-2015-present.jpg'
import { Link, useFetcher, useNavigate } from 'react-router-dom';
import { toggleActions } from '../../Redux/store';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { accountActions } from '../../Redux/store';
import { setCurrentAcc } from '../../Redux/store';
import { logDOM } from '@testing-library/react';
import {toast} from 'react-toastify'
const Form = () => {
    
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    
    
   
    const fetching = async () => {
        const response = await fetch('https://clone-b8039-default-rtdb.firebaseio.com/.json')
        const data = await response.json()
        dispatch(accountActions.setAccs(data))
        
    }


    const findAcc = async (userid) => {
      const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${userid[0]}.json` )
       const data = await response.json()
       dispatch(setCurrentAcc.targetAcc(data))
       localStorage.setItem('account',JSON.stringify(data))
       return state.currentAcc.targetAcc
    }


    const nextBtnHandler = async e => {
        e.preventDefault()
        if (inputRef.current.value && inputRef.current.value.match(/@/)) {
            // dispatch(toggleActions.turnNext())
            const usersObjectsResponse = await fetch('https://clone-b8039-default-rtdb.firebaseio.com/.json')
            const usersObjects = await usersObjectsResponse.json()
            let id = Object.entries(usersObjects).find(user => {
                if (user[1].username === inputRef.current.value) {
                    return user
                }
               
            })

           dispatch(setCurrentAcc.setID(id))
           console.log(state.currentAcc.currentID);
           await findAcc(id)
            navigate('/login')
            
        }
    
    }

    useEffect(() => {
       fetching()
    },[])
    


    

    const navigate = useNavigate()
    let inputRef = useRef()
    let placeHolderRef = useRef()


    return (
        <form action="" className={`email ${state.toggleStates.nextPage ? 'translated' : ''}`} >
        <div className="greeting_messages">
           <div className="logo"><img src={Logo} alt="" /></div>
            <div className='message'>Sign in</div>
            <div className='message'>to Continue to Gmail</div>
        </div>

        <div className="email_input">
        <input ref={inputRef} onBlur={() => {
            if (!inputRef.current.value) {
                dispatch(toggleActions.blurInput())
            }
        }} autoFocus onFocus={() => {
            dispatch(toggleActions.focusInput())
        }} type="text" />
            <div ref={placeHolderRef} className={`placeholder ${state.toggleStates.focused ? 'gone' : ''}`}>Email or Phone</div>
        </div>
        <button className='save_account_btn'>Forgot email?</button>
        <div className="security_questions">
            Not your computer? Use Guest mode to sign in privately.
        </div>
        <button className='information_btn'>Learn More</button>
        <div className="options">
            <button className='create_account_btn' onClick={() => {
                navigate('/registration')
            }}>Create Account</button>
            <button onClick={nextBtnHandler} className="next_page_btn">Next</button>
        </div>

        
     </form>
        
    )
}
export default Form