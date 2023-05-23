import { useEffect, useState } from 'react';
import {AiOutlineStar as Staricon} from 'react-icons/ai'
import {HiInbox} from 'react-icons/hi'
import {BsFillTrashFill as TrashIcon} from 'react-icons/bs' 
import {BsFillEnvelopeFill as EnvelopeIcon} from 'react-icons/bs' 
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai' 
import { useSelector } from 'react-redux';

const Mail = (props) => {
    const [showIcons,setShowIcons] = useState(false)
    const state = useSelector(state => state)
    const mailID = props.props[0]

    const deleteBtnHandler =  e => {
        e.preventDefault()
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/inbox/${props.props[0]}.json`,{
            method:'DELETE'
        })
        props.setInboxState(Object.fromEntries(Object.entries(props.inboxState).filter(mail => mail[0] !== props.props[0])))

    }    

  

    return (
        <div className="mail" onMouseLeave={() => {
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
               {props.props[1].mailsubject}
            </div>
            <div className="mail_text" >
                {props.props[1].mailtext}
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