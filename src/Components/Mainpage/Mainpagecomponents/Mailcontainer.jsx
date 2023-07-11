import { useDispatch, useSelector } from "react-redux"
import Mailbox from "./Mailbox"
import Mail from "./Mail"
import { useContext, useEffect, useState } from "react"
import {IoIosRefresh as RefreshIcon} from 'react-icons/io'
import { setCurrentAcc, sideBarToggles, toggleActions } from "../../../Redux/store"

const Mailcontainer = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
   
    const [inbox,setInbox] = useState(state.currentAcc.targetAcc.inbox)
    
    

    const refreshData = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`)
            const user = await response.json()
            console.log(user.inbox);
            console.log(inbox);
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
    const refreshCurrentPage = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}.json`)
            const user = await response.json()
            setInbox(user.inbox)
            console.log(inbox);
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        refreshData()
        refreshCurrentPage()    
        console.log('its rendered'); 
    },[])

    return (
        <div className="mail_container" onClick={() => dispatch(toggleActions.closeSidebar())}>
           {state.toggleStates.showmailbox && <Mailbox></Mailbox>}
           <div className="mails_container">
           <div className="mail_container_options">
            <button className="refresh_btn" onClick={RefreshBtnHandler}><RefreshIcon style={{color:'black'}}></RefreshIcon></button>
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