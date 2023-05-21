import {AiOutlineSearch as Searchicon} from 'react-icons/ai'
import {GiSettingsKnobs as Settingsicon} from 'react-icons/gi'
import {FiSettings}  from 'react-icons/fi'
import {TbGridDots as Menudots} from 'react-icons/tb'  
import {SlQuestion as Questionmark} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {RxHamburgerMenu} from 'react-icons/rx'
import Logo from '../../../Assets/logo_gmail_lockup_default_1x_r5.png'
import { toggleActions } from '../../../Redux/store'
const Searchbar = () => {
    const state = useSelector(state => state.currentAcc.targetAcc)
    const statee = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <header>
            
            <div className="logo">
            <RxHamburgerMenu onClick={() => dispatch(toggleActions.toggleSidebar())} className='burgermenu'></RxHamburgerMenu>
            <img src={Logo} alt="" />   
            </div>
            <div className="input_bar">
                <Searchicon className='search_icon'></Searchicon>
                <Settingsicon className='filter_icon'></Settingsicon>
                <input type="text" placeholder="Search mail" />
            </div>
            <div className="account_icons">
                <div className="question_mark">
                <Questionmark></Questionmark>
                </div>
                <div className="settings_icon">
                <FiSettings></FiSettings>
                </div>
                <div className="dots_icon">
                    <Menudots></Menudots>
                </div>
                <div className="profile_photo">
                    <div className="letter">
                    {state.name[0].toUpperCase()}

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Searchbar