import { useDispatch, useSelector } from "react-redux"
import Mailbox from "./Mailbox"
import Mail from "./Mail"
import { useContext, useEffect, useState } from "react"
import {IoIosRefresh as RefreshIcon} from 'react-icons/io'
import { setCurrentAcc } from "../../../Redux/store"

const Mailcontainer = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {

    },)
    const [inbox,setInbox] = useState(state.currentAcc.targetAcc.inbox)
    console.log(state.currentAcc.targetAcc.inbox);
    

    const refreshData = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`)
            const user = await response.json()
            setInbox(user.inbox)
            dispatch(setCurrentAcc.targetAcc(user))
        }
        catch(err) {
            console.log(err)
        }
    }

    const RefreshBtnHandler = e => {
        e.preventDefault()
        refreshData()
    }


    useEffect(() => {
        refreshData()     
    },[])

    return (
        <div className="mail_container">
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container">
           <div className="mail_container_options">
            <button className="refresh_btn" onClick={RefreshBtnHandler}><RefreshIcon></RefreshIcon></button>
           </div>
           {inbox &&  Object.entries(inbox).reverse().map(mail => {
            return (

                <Mail props={mail} setInbox={setInbox}  inboxState={inbox}></Mail>
            )
           })}
           </div>
        </div>
    )
}
export default Mailcontainer