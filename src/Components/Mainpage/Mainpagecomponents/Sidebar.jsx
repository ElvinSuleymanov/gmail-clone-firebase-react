import {HiPencil as Pencilicon} from 'react-icons/hi'
import {FaInbox} from 'react-icons/fa'
import {AiOutlineStar as Staricon} from 'react-icons/ai'
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai' 
import { useDispatch, useSelector } from 'react-redux'
import { sideBarToggles, toggleActions} from '../../../Redux/store'
import { Outlet, useNavigate } from 'react-router-dom'
import {IoSendSharp} from 'react-icons/io5'

import { inputActions } from '../../../Redux/store'

const Sidebar = () => {
    const state = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const sentButtonHandler = (e) => {
        e.preventDefault()
        dispatch(sideBarToggles.setCurrentPage('sent'))
        navigate(`/accounts/${state.currentAcc.currentID}/sent`)
    }

    const goFavorites = e => {
        e.preventDefault()
        dispatch(sideBarToggles.setCurrentPage('favorite'))
        navigate(`/accounts/${state.currentAcc.currentID}/favorites`)
    }

    return (
    <aside className={` ${state.toggleStates.openedSide ? 'active' : ''} `} onMouseLeave={() => {
            dispatch(toggleActions.closeSidebar())
        
    }} onMouseEnter={() => {
            dispatch(toggleActions.openSidebar())
       
    }}>
        
        <div className="create_mail">
            <button className="create_btn" onClick={() => {
                dispatch(toggleActions.showMailBox())
                if (state.toggleStates.openedSide) {
                    dispatch(toggleActions.closeSidebar())
                } 
            }}>
               {<Pencilicon style={{color:'black'}}></Pencilicon>}
               {/* <span className="btn_text">Compose</span> */}
            </button>
        </div>
        <div className={`inbox_icon ${state.sideBarStates.inboxPage ? 'current' : ''}`} >
            <button className="inbox" style={{cursor:'pointer'}}  onClick={() => {
            dispatch(sideBarToggles.setCurrentPage('inbox'))
            navigate(`/accounts/${state.currentAcc.currentID}`)

        }}>
            <FaInbox style={{color:'black'}}></FaInbox>
            </button>
        </div>
        <div className={`star_icon ${state.sideBarStates.favoritesPage ? 'current' : ''}`}>
            <button className="star" style={{cursor:'pointer'}} onClick={goFavorites}>
                <Staricon style={{color:'black'}}></Staricon>
            </button>
        </div>
        <div className="clock_icon">
            <button className="clock">
                <Clockicon style={{color:'black'}}></Clockicon>
            </button>
        </div>
        <div className={`sent_icon ${state.sideBarStates.sentPage ? 'current' : ''}`}   >
            <button className={`sent`} onClick={sentButtonHandler} style={{cursor:'pointer'}} >
                <IoSendSharp style={{color:'black'}}></IoSendSharp>
            </button>
        </div>
    </aside>
    )
}

export default Sidebar