import '../Mainpagecomponents/Sentinbox.scss'
import Searchbar from '../Mainpagecomponents/Search'
import Sidebar from '../Mainpagecomponents/Sidebar'
import Mailbox from '../Mainpagecomponents/Mailbox'
import { useDispatch, useSelector } from "react-redux"
import {IoIosRefresh as RefreshIcon} from 'react-icons/io'
import Mail from "../Mainpagecomponents/Mail"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import FavoritedMail from './Favoritedmail'
import { setCurrentAcc, sideBarToggles, toggleActions } from '../../../Redux/store'
const FavoritesMain = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [favorites,SetFavorites] = useState(false)
    const refreshFavoritesBox = async () => {
        try {
            const response = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/inbox.json`)
            const favoritesInbox = await response.json()
            console.log(favoritesInbox);
            if(favoritesInbox) {
                SetFavorites(favoritesInbox)
            }
           
        }
        catch(err) {
            console.log(err)
        }
    }

    const RefreshBtnHandler = e => {
        e.preventDefault()
        refreshFavoritesBox()
    }
     

    


    useEffect(() => {

        refreshFavoritesBox()
            
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
               Boolean(Object.entries(favorites).length) && Object.entries(favorites).map((mail) => {
                    if (mail[1].isFavorite) {
                        return (
                            <>
                            {<FavoritedMail props={mail} setInbox={SetFavorites} inboxState={favorites}/>}
                            </>
                        )
                    }
                    
                })
            }



           </div>
            
        </div>
            </section>
                
        </div>
    )
}

export default FavoritesMain