import {MdOutlineOpenInFull as Fullscreen} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { inputFilterActions, toggleActions } from '../../../Redux/store'
import {VscChromeMinimize} from 'react-icons/vsc'
import { useRef } from 'react'
import { Toaster,toast } from 'react-hot-toast'
const Mailbox = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const targetAccInput = useRef()
    const mailTextInput = useRef()
    const mailSubjectInput = useRef()
    var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];



    const sendMailHandler = async (e) => {
        e.preventDefault()

      
       
       let newMail = {
        mailsender:state.currentAcc.targetAcc.username,
        mailsubject:mailSubjectInput.current.value,
        mailtext:mailTextInput.current.value,
        maildate:new Date().getDate() +  ' ' +month[new Date().getMonth()],
        mailTime:new Date().getHours().toString().padStart(2,0) + ':' + new Date().getMinutes().toString().padStart(2,0),
        currentSeconds: new Date().getTime(),
        isFavorite:false
       }


           
        const accountsObjectsResponse = await fetch(`https://clone-b8039-default-rtdb.firebaseio.com/.json`)
        const accountsObject = await accountsObjectsResponse.json()

        console.log(accountsObject);
        let accountsArr = Object.entries(accountsObject)
       let targetAccObject = accountsArr.filter(account => {
            if(account[1].username === targetAccInput.current.value) {
                return account
            }
            else {
                return undefined
            }
        })
        if (targetAccObject[0] === undefined) {
            toast.error('User Not Found')
            return ''
        }

        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${targetAccObject[0][0]}/inbox.json`,{
            method:'POST',
            body:JSON.stringify(newMail)
        })

  


        dispatch(toggleActions.hideMailBox())
        // dispatch(inputFilterActions.addToSentAccs(targetAccObject[0][1].username))
        fetch(`https://clone-b8039-default-rtdb.firebaseio.com/${state.currentAcc.currentID}/sent.json`,{
            method:'POST',
            body: JSON.stringify({...newMail})
        })
    }
    





    return (
        <>
        <Toaster></Toaster>
        <div className="mail_box">
            <div className="mail_box_controller">
                <span className="text">New Message</span>
                <div className="controller">
                    <div className="minimize">
                    <VscChromeMinimize></VscChromeMinimize>
                    </div>
                    <div className="fullscreen">
                    <Fullscreen></Fullscreen>
                    </div>
                    <div className="close" onClick={() => {
                        dispatch(toggleActions.hideMailBox())
                    }}>
                    <GrFormClose></GrFormClose>
                    </div>
                </div>
            </div>
            <div className="mail_form_container">
                <form action="" >
                    <div className="target_acc">
                        <input type="text" placeholder='Recipients' ref={targetAccInput} />
                    </div>
                    <div className="subject_mail">
                        <input type="text" placeholder='Subject' ref={mailSubjectInput}/>
                    </div>
                    <div className="mail_text">
                        <textarea ref={mailTextInput} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="sending_options">
                        <div className="send">
                            <button className="send_btn" onClick={sendMailHandler}>Send</button>
                            <button className="schedule_btn">&#9660;</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Mailbox