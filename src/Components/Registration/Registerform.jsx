import Logo from '../../Assets/Google-Logo-2015-present.jpg'
import '../Registration/Registerform.scss'
import svg from '../../Assets/account.svg'
import { useDispatch, useSelector } from 'react-redux'
import {toggleActions} from '../../Redux/store'
import { inputActions } from '../../Redux/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import userEvent from '@testing-library/user-event'
const Registration = () => {


    const sending = async (name,surname,username,password) => {
        const response = await fetch('https://clone-b8039-default-rtdb.firebaseio.com/.json',{
           method:'POST',
           body: JSON.stringify({
            name:name,
            surname:surname,
            username:username,
            password:password,
            inbox:[]
           })
        })
       
       
    }
    

    const navigate = useNavigate()
        // REFERENCES
    const [show,setShow] = useState(false)
    const checkboxRef = useRef()
    const nameInputRef = useRef()
    const surnameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const passwordRepeatInput = useRef()
    const inputArr = [checkboxRef,nameInputRef,surnameInputRef,emailInputRef,passwordInputRef,passwordRepeatInput]
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <div className="registration_form">

            <form action="" className='register'>
            <div className="logo">
                <img src={Logo} alt="" />
                
            </div>
            <div className="greeting_message">
                Create Your Google Account
            </div>

                <div className="name_surname">
                    <div className="name">
                        <input ref={nameInputRef}  onBlur={() => {
                                if (!nameInputRef.current.value) {
                                    dispatch(inputActions.nameInput(false))
                                }
                            
                            }} onFocus={() => {dispatch(inputActions.nameInput(true))}} type="text" />
                        <div className={`placeholder ${state.inputStates.nameInput ? 'gone' : ''}`}>First name</div>
                    </div>


                    <div className="surname">
                        <input type="text" ref={surnameInputRef}  onBlur={() => {
                            if(!surnameInputRef.current.value) {
                                dispatch(inputActions.surnameInput(false))
                            }
                        }}
                        onFocus={() => {dispatch(inputActions.surnameInput(true))}}
                        />
                        <div className={`placeholder ${state.inputStates.surnameInput ? 'gone' : ''}`}>Last name</div>
                    </div>

                </div>

                <div className="email_input">
                    <input ref={emailInputRef} onFocus={() => {
                        dispatch(inputActions.emailInput(true))
                    }} onBlur={() => {
                        if (!emailInputRef.current.value) {
                            dispatch(inputActions.emailInput(false))
                        }
                    }} type="text" placeholder='@gmail.com'/>
                    <div className={`placeholder ${state.inputStates.emailInput ? 'gone' : ''}`}>Username</div>
                </div>

                <div className="password_inputs">
                    <div className="main_password">
                        <input ref={passwordInputRef} onBlur={() => {
                            if (!passwordInputRef.current.value) {
                                dispatch(inputActions.passwordInput(false))
                            }
                        }} onFocus={() => {
                            dispatch(inputActions.passwordInput(true))
                            
                        }} type={`${show ? 'text' : 'password'}`} />
                        <div className={`placeholder ${state.inputStates.passwordInput ? 'gone' : ''}`}>Password</div>
                    </div>
                    <div className="repeat_password">
                        <input  onBlur={() => {
                             if (!passwordRepeatInput.current.value) {
                                dispatch(inputActions.passwordInputRepeat(false))
                            }
                        }} ref={passwordRepeatInput} onFocus={() => {dispatch(inputActions.passwordInputRepeat(true))}} type={`${show ? 'text' : 'password'}`} />
                        <div className={`placeholder ${state.inputStates.passwordInputRepeat ? 'gone' : ''}`}>Confirm</div>
                    </div>
                </div>
                <div className="show_password">
                <label onClick={() => {
                    if (checkboxRef.current.checked) {
                        setShow(true)
                    }
                    else {
                        setShow(false)
                    }
                }}  htmlFor="checkbox">Show Password</label>
                <input onClick={() => {
                    if (checkboxRef.current.checked) {
                        setShow(true)
                    }
                    else {
                        setShow(false)
                    }
                }} type="checkbox" id='checkbox' ref={checkboxRef} />
                </div>
                <div className="submit_btn_container">
                    <button onClick={() => {
                        navigate('/')
                    }} className='back_sign'>Sign in instead</button>
                    <button onClick={() => {
                        if (inputArr.every(input => input.current.value !== '') && passwordInputRef.current.value === passwordRepeatInput.current.value) {
                            console.log('sended')
                            sending(nameInputRef.current.value,surnameInputRef.current.value,emailInputRef.current.value,passwordInputRef.current.value)
                            navigate('/')
                            
                        }
                        else {
                            alert('fill the blanks correctly')
                        }
                    }} className='next_btn'>Next</button>
                </div>
           
            </form>
            <img src={svg} className='shield_logo' alt="" />
           
        </div>
    )
}
export default Registration