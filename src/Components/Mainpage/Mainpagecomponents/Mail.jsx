import { useEffect, useState } from 'react';
import {AiOutlineStar as Staricon} from 'react-icons/ai'
import {HiInbox} from 'react-icons/hi'
import {BsFillEnvelopeFill as EnvelopeIcon} from 'react-icons/bs' 
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai' 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {BsFillTrashFill as TrashIcon} from 'react-icons/bs'


        // Actions
import { defineCurrentMail } from '../../../Redux/store';
import { setCurrentAcc } from '../../../Redux/store';
const Mail = (props) => {
    const [showIcons,setShowIcons] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const mailID = props.props[0]
    const navigate = useNavigate()
 
    const deleteBtnHandler = e => {
        e.preventDefault()
        e.stopPropagation()
        props.setInbox(Object.fromEntries(Object.entries(props.inboxState).filter(mail => mail[0] !== props.props[0])))
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/inbox/${props.props[0]}.json`,{
            method:'DELETE'
        })
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/sent/${props.props[0]}.json`,{
            method:'DELETE'
        })
    }    


    const refreshPreviousPage = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`)
            const user = await response.json()
            props.setInbox(user.inbox)
           
        }
        catch(err) {
            console.log(err)
        }
    }
    return (
        <div className="mail" onClick={ e => {
            e.stopPropagation()
            e.preventDefault()
            refreshPreviousPage()
            dispatch(defineCurrentMail.definePage(props.props)) 
             navigate(`/accounts/${state.currentAcc.currentID}/${props.props[0]}`)
        } } onMouseLeave={() => {
            setShowIcons(false)
        }} onMouseEnter={() => {
            setShowIcons(true)
        }}>
            <div className="mail_options">
                <input type="checkbox" />
               <Staricon></Staricon>
            </div>
            <div className="mail_sender">
            {props.props[1].mailsender}
            </div>
            <div className="mail_subject">
               {props.props[1].mailsubject.length > 60 ? props.props[1].mailsubject.slice(0,40) + '...' : props.props[1].mailsubject}
            </div>
            <div className="mail_text">
                {props.props[1].mailtext.length > 60 ? props.props[1].mailtext.slice(0,50) + '...' : props.props[1].mailtext}
            </div>
            {
                showIcons ? <div className="mail_controllers">
                                <div className="inbox icon">
                                    <HiInbox/>
                                </div>
                                <div className="trash icon" onClick={deleteBtnHandler} >
                                    <TrashIcon/>
                                </div>
                                <div className="envelope icon">
                                <EnvelopeIcon/>
                                </div>
                                <div className="clock icon">
                                    <Clockicon/>
                                </div>
                            </div>
                :
            <div className="mail_send_date">
            {props.props[1].maildate}
            </div>

            }

        </div>
    )
    
}
export default Mail