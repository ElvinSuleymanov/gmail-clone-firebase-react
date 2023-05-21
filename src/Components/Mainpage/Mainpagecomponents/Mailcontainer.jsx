import { useSelector } from "react-redux"
import Mailbox from "./Mailbox"
import Mail from "./Mail"
import { useState } from "react"
const Mailcontainer = () => {
    const state = useSelector(state => state)
    const [inbox,setInbox] = useState(state.currentAcc.targetAcc.inbox)
    const refreshingInbox = () => {

    }
    return (
        <div className="mail_container">
           
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container">
           {state.currentAcc.targetAcc.inbox && Object.entries(state.currentAcc.targetAcc.inbox).map(mail => {
            return (

                <Mail props={mail}></Mail>
            )
           })}
           </div>
        </div>
    )
}

export default Mailcontainer