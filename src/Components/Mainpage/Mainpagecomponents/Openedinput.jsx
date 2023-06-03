import '../Mainpage.scss'


        // ICONS
import {AiOutlineSearch as Searchicon} from 'react-icons/ai'
import {GiSettingsKnobs as Settingsicon} from 'react-icons/gi'
import {FiSettings}  from 'react-icons/fi'
import {TbGridDots as Menudots} from 'react-icons/tb'  
import {SlQuestion as Questionmark} from 'react-icons/sl'
import {RxHamburgerMenu} from 'react-icons/rx'
import {HiUser} from 'react-icons/hi'
import {FaEnvelope as Envelope} from 'react-icons/fa' 

import Logo from '../../../Assets/logo_gmail_lockup_default_1x_r5.png'
import { toggleActions } from '../../../Redux/store'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { inputActions } from '../../../Redux/store'
import { useEffect } from 'react'

const Openedinput = (props) => {
    const navigate = useNavigate()
    const state2 = useSelector(state => state)
    const dispatch = useDispatch()
    
    const inputFocusHandler = e => {
        e.preventDefault()
        dispatch(inputActions.searchInputFocus())
        console.log(state2.inputStates.searchInputFocus);
    }
    const inputBlurHandler = e => {
        e.preventDefault()
        dispatch(inputActions.searchInputFocus())
        console.log(state2.inputStates.searchInputFocus);

    }

    
    let inboxArr = Object.entries(state2.currentAcc.targetAcc.inbox)    
    useEffect(() => {

    },[])
    // inboxArr.filter(mail => mail[1].mailtext === state2.inputFilterStates.filterByString)
    return (
        <div className="input_bar_toggle" >
                <div className="input_bar_toggle_filters">
                    <button className="attach_btn_filter">Has an Attachment</button>
                    <button className="sent_btn_filter">From me</button>
                    <button className="date_btn_filter">Last 7 Days</button>
                </div>
                <div className="senders">
                    <div className="sender">
                        <div className="sender_profile">
                            <HiUser></HiUser>
                        </div>
                        <div className="sender_username">
                            
                               
                            
                        </div>
                    </div>
                </div>
                <div className="filtered_mails" ref={props.reference}>

                    {inboxArr.map(mail => {
                        if (mail[1].mailtext.match(new RegExp(`^${state2.inputFilterStates.filterByString}`)) ) {
                            return (
                            <div className="mail"  onClick={(e) => {
                            
                                console.log(mail[0]);
                                navigate(`/accounts/${state2.currentAcc.currentID}/${mail[0]}`)
                            }}>
                                <div className="envelope_icon">
                                    <Envelope></Envelope>
                                </div>
                                <div className="mail_informations">
                                    <div className="mail_subject">{mail[1].mailsubject}</div>
                                    <div className="mail_text">{mail[1].mailtext}</div>
                                </div>
                                <div className="mail_date">
                                    {mail[1].maildate}
                                </div>
                            </div>  
                            )

                        }

                    })}
                </div>

         </div>
    )
}

export default Openedinput