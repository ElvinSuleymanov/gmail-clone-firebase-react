import { useEffect, useState } from 'react'
import '../Mainpage/Mainpage.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../Assets/logo_gmail_lockup_default_1x_r5.png'
import  Search  from '../Mainpage/Mainpagecomponents/Search'
import Sidebar from './Mainpagecomponents/Sidebar'
import Mailcontainer from './Mainpagecomponents/Mailcontainer'
const Mainpage = () => {
    const {userid} = useParams()
    const state = useSelector(state => state)
    const [st,setst] = useState(0)
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