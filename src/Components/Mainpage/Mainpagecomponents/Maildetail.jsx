import Searchbar from "./Search"
import Sidebar from "./Sidebar"
import './Maildetail.scss'
import Mailcontainer from "./Mailcontainer"
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Mailbox from "./Mailbox"


            // ACTIONS
import { setCurrentAcc } from "../../../Redux/store"

            // ICONS
import {AiOutlineArrowLeft as BackArrow} from 'react-icons/ai'
import {FaInbox as InboxIcon} from 'react-icons/fa'
import {MdReportGmailerrorred as ReportIcon} from 'react-icons/md'
import {BsFillTrashFill } from 'react-icons/bs' 
import { Navigate, useNavigate } from "react-router-dom"
import { toggleActions } from "../../../Redux/store"
const Maildetail = (props) => {
    const state = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [condition,setCondition] = useState(false)
  
    useEffect(() => {
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`).then((data) => {
        return data.json()
        }).then((data) => {
            dispatch(setCurrentAcc.targetAcc(data))
            setCondition(true)
        })
    },[])
    if (state.currentAcc.currentID === undefined) {
        return <Navigate to={'/'}></Navigate>
    }
    const deleteHandler = e => {
        e.preventDefault()
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/inbox/${state.mailPageState.currentMail[0]}.json`,
        {
            method:'DELETE'
        }
        )
        navigate(-1)

        
    }
   
    const TimeShowing = () => {
        let mailSeconds = state.mailPageState.currentMail[1].currentSeconds

        let date = new Date()

        let result = Math.floor((date.getTime() - mailSeconds) / 1000) 
        if(result > 3600) {
           return `${Math.floor(result / 60 / 60)} Hours ago`
       }
       if(result > 60) {
          return `${Math.floor(result / 60)} Minutes ago`
      }
        if (result > 0 && result < 59) {
            return `${result} Seconds ago`
        }
    }

    TimeShowing()
  
    return ( condition && 
        <div className='main_section mail_detail' >
          
          
            <Searchbar></Searchbar>
            <section>
            <Sidebar></Sidebar>
        <div className="mail_container">
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container mail_detail" onClick={() => dispatch(toggleActions.closeSidebar())}>
            <div className="mail_detail_options">
                <div className="turn_previous icon" onClick={() => {
                    navigate(-1)
                }}>
                    <BackArrow></BackArrow>
                </div>
                <div className="inbox_icon icon">
                    <InboxIcon></InboxIcon>
                </div>
                <div className="report_icon icon">
                    <ReportIcon></ReportIcon>
                </div>
                <div className="trash_icon icon">
                    <BsFillTrashFill onClick={deleteHandler}></BsFillTrashFill>
                </div>
            </div>

            <div className="mail_detail_container" >
                <div className="mail_text_container_top">
                    <div className="mail_subject_detail">{state.mailPageState.currentMail[1].mailsubject}</div>
                    <div className="mail_sent_date">{state.mailPageState.currentMail[1].maildate} {state.mailPageState.currentMail[1].mailTime} ({TimeShowing()}) </div>
                </div>

                <div className="mail_text_container_bottom">
                    <div className="mail_text">
                    <div className="mail_sender_informations">
                        <div className="sender_profile">
                            {state.mailPageState.currentMail[1].mailsender[0].toUpperCase()}
                        </div>
                        <div className="sender_name_date">
                            <div className="sender_name">{state.mailPageState.currentMail[1].mailsender}</div>
                            <div className="sent_date">{state.mailPageState.currentMail[1].mailTime}, {state.mailPageState.currentMail[1].maildate} 2023</div>

                        </div>
                    </div>
                    {state.mailPageState.currentMail[1].mailtext}
                    </div>
                </div>
            </div>
        
          </div>

        </div>
            </section>

        </div>
    )
}

export default Maildetail