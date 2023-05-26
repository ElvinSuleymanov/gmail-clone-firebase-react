import {HiPencil as Pencilicon} from 'react-icons/hi'
import {FaInbox} from 'react-icons/fa'
import {AiOutlineStar as Staricon} from 'react-icons/ai'
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai' 
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions} from '../../../Redux/store'
import { Outlet } from 'react-router-dom'
import {IoSendSharp} from 'react-icons/io5'



const Sidebar = () => {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch()


    


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
               {<Pencilicon></Pencilicon>}
               {/* <span className="btn_text">Compose</span> */}
            </button>
        </div>
        <div className="inbox_icon current">
            <button className="inbox">
            <FaInbox></FaInbox>
            </button>
        </div>
        <div className="star_icon">
            <button className="star">
                <Staricon></Staricon>
            </button>
        </div>
        <div className="clock_icon">
            <button className="clock">
                <Clockicon></Clockicon>
            </button>
        </div>
        <div className="sent_icon">
            <button className="sent">
                <IoSendSharp></IoSendSharp>
            </button>
        </div>
    </aside>
    )
}

export default Sidebar