import Searchbar from "./Search"
import Sidebar from "./Sidebar"
import './Sentinbox.scss'
import Mailbox from "./Mailbox"
import { useDispatch, useSelector } from "react-redux"
import {IoIosRefresh as RefreshIcon} from 'react-icons/io'
import Mail from "./Mail"
import { useEffect, useState } from "react"
import SentMail from "./Sentmail"
import { Navigate } from "react-router-dom"
import { toggleActions } from "../../../Redux/store"
const SentInbox = () => {
    const dispatch = useDispatch()

    const [sent,SetSent] = useState(false)
    const refreshSentInbox = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/sent.json`)
            const sentInbox = await response.json()
            console.log(sentInbox);
           SetSent(sentInbox)
            // dispatch(setCurrentAcc.targetAcc(user))
        }
        catch(err) {
            console.log(err)
        }
    }
    const state = useSelector(state => state)

    const RefreshBtnHandler = e => {
        e.preventDefault()
        refreshSentInbox()
    }

    useEffect(() => {
        refreshSentInbox()
    },[])

    if (state.currentAcc.currentID === undefined) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div className='main_section' >
          
          
            <Searchbar></Searchbar>
            <section>
            <Sidebar></Sidebar>
            <div className="mail_container">
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container" onClick={() => dispatch(toggleActions.closeSidebar())}>
           <div className="mail_container_options">
            <button className="refresh_btn" onClick={RefreshBtnHandler}><RefreshIcon style={{color:'black'}}></RefreshIcon></button>
           </div>
            {
                sent && Object.entries(sent).reverse().map(mail => {
                    // return <Mail props={mail} setInbox={SetSent}  inboxState={sent}>

                    // </Mail>

                    return <SentMail props={mail} setInbox={SetSent} inboxState={sent}></SentMail>
                })
            }
           </div>
        </div>
            </section>

        </div>
    )
}

export default SentInbox