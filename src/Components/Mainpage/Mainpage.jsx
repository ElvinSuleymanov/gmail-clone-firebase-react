import { useEffect, useState } from 'react'
import '../Mainpage/Mainpage.scss'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../Assets/logo_gmail_lockup_default_1x_r5.png'
import  Search  from '../Mainpage/Mainpagecomponents/Search'
import Sidebar from './Mainpagecomponents/Sidebar'
import Mailcontainer from './Mainpagecomponents/Mailcontainer'
import { Routes,Route,Router } from 'react-router-dom'
import Maildetail from './Mainpagecomponents/Maildetail'
import { Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom';
const Mainpage = () => {
    const {userid} = useParams()
    const state = useSelector(state => state)
    if (state.currentAcc.currentID === undefined) {
        return <Navigate to={'/'}></Navigate>
    }
    return (

    
    
        <div className='main_section'>
            <Search></Search>
            <section>
            <Sidebar></Sidebar>
            <Mailcontainer></Mailcontainer>
            </section>
        </div>

    )
   

    
    
}

export default Mainpage