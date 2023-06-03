import {AiOutlineSearch as Searchicon} from 'react-icons/ai'
import {GiSettingsKnobs as Settingsicon} from 'react-icons/gi'
import {FiSettings}  from 'react-icons/fi'
import {TbGridDots as Menudots} from 'react-icons/tb'  
import {SlQuestion as Questionmark} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {RxHamburgerMenu} from 'react-icons/rx'
import Logo from '../../../Assets/logo_gmail_lockup_default_1x_r5.png'
import { inputFilterActions, toggleActions } from '../../../Redux/store'
import { useNavigate } from 'react-router-dom'
import Openedinput from './Openedinput'
import { inputActions } from '../../../Redux/store'
import { headerToggles } from '../../../Redux/store'
import QuestionMarkToggle from './Questiontoggle'
import { useRef } from 'react'

const Searchbar = () => {
    const state = useSelector(state => state.currentAcc.targetAcc)
    const state2 = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef()
    const inputFocusHandler = e => {
        e.preventDefault()
      
        dispatch(inputActions.searchInputFocus())
        
    }
    const inputBlurHandler = e => {
        e.preventDefault()
            dispatch(inputActions.searchInputFocus())

    }


    const inputChangeHandler = e => {
        e.preventDefault()
        dispatch(inputFilterActions.setFilterByString(e.target.value))
         
    }

    const questionMarkToggle = e => {
        e.preventDefault()
        dispatch(headerToggles.toggleQuestionMark())
    }
    return (
        <header>
            
            <div className="logo">
            <RxHamburgerMenu onClick={() => dispatch(toggleActions.toggleSidebar())} className='burgermenu'></RxHamburgerMenu>
            <img src={Logo} style={{cursor:'pointer'}} onClick={() => navigate('/')} alt="" />   
            </div>
           <div className="input_bar">
                <Searchicon className='search_icon'></Searchicon>
                <Settingsicon className='filter_icon'></Settingsicon>
                <input type="text" placeholder="Search mail" className={`${state2.inputStates.searchInputFocus ? 'opened' : ''}`} onFocus={inputFocusHandler} onChange={inputChangeHandler} onBlur={inputBlurHandler}/>
                {state2.inputStates.searchInputFocus && <Openedinput reference={inputRef}></Openedinput>}
            </div>
            
            <div className="account_icons">
                <div className="question_mark" onClick={questionMarkToggle}>
                <Questionmark></Questionmark>
                {state2.headerStates.showQuestionMarkToggle && <QuestionMarkToggle></QuestionMarkToggle>}
                </div>
                <div className="settings_icon">
                <FiSettings></FiSettings>
                </div>
                <div className="dots_icon">
                    <Menudots></Menudots>
                </div>
                <div className="profile_photo">
                    <div className="letter" style={{userSelect:'none'}}>
                    {state.name[0].toUpperCase()}

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Searchbar