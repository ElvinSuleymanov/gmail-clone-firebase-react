import { useSelector } from "react-redux"
import Mailbox from "./Mailbox"
import Mail from "./Mail"
import { useState } from "react"
import {IoIosRefresh as RefreshIcon} from 'react-icons/io'
const Mailcontainer = () => {
    const state = useSelector(state => state)
    const [inbox,setInbox] = useState(state.currentAcc.targetAcc.inbox)
    
    const RefreshBtnHandler = async e => {
        e.preventDefault()
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`)
            const user = await response.json()
            setInbox(user.inbox)
        }
        catch(err) {
            console.log(err)
        }
    }
    

    return (
        <div className="mail_container">
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container">
           <div className="mail_container_options">
            <button className="refresh_btn" onClick={RefreshBtnHandler}><RefreshIcon></RefreshIcon></button>
           </div>
           {inbox && Object.entries(inbox).map(mail => {
            return (

                <Mail props={mail}></Mail>
            )
           })}
           </div>
        </div>
    )
}

export default Mailcontainer