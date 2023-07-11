
import Logo from '../../Assets/Google-Logo-2015-present.jpg'
import '../Login/Loginpassword.scss'
import { toggleActions } from '../../Redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster,toast } from 'react-hot-toast'
const FormPassword = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const placeHolderRef = useRef()
    const inputRef = useRef()
    const navigate = useNavigate()

    console.log(state.currentAcc);
    return (state.currentAcc.targetAcc &&
        <>
        <Toaster></Toaster>
        <form action="" className={`password ${state.toggleStates.nextPage ? 'translated' : ''}`}>
        <div className="greeting_messages">
           <div className="logo"><img src={Logo} alt="" /></div>
            <div className='message'>Hi {state.currentAcc.targetAcc.surname}</div>
            <div className='message invisible'>to Continue to Gmail</div>
        </div>

        <div className="email_input">
        <input ref={inputRef} onBlur={() => {
           if (!inputRef.current.value) {
            dispatch(toggleActions.blurInput())
        }
        }} autoFocus onFocus={() => {
            dispatch(toggleActions.focusInput())
        }} type="password" />
            <div ref={placeHolderRef} className={`placeholder ${state.toggleStates.focused ? 'gone' : ''}`}>Enter Your Password</div>
        </div>
        <button className='save_account_btn'>Forgot password?</button>
        <div className="security_questions">
            Not your computer? Use Guest mode to sign in privately.
        </div>
        <button className='information_btn'>Learn More</button>
        <div className="options">
            <button className='create_account_btn'>Forgot Password?</button>
            <button onClick={(e) => {
                e.preventDefault()
                if (state.currentAcc.targetAcc.password === inputRef.current.value) {
                    navigate(`/accounts/${state.currentAcc.currentID}`)
                    localStorage.setItem("user",JSON.stringify(state.currentAcc.targetAcc))
                }
                else {
                    toast.error('Wrong Password')
                }
            }} className="next_page_btn">Next</button>
        </div>

        
     </form>
        </>
    )
}

export default FormPassword