import {AiOutlineStar as Staricon} from 'react-icons/ai'
const Mail = (props) => {
    console.log(props.props[1]);
    
    return (
        <div className="mail">
            <div className="mail_options">
                <input type="checkbox" />
               <Staricon></Staricon>
            </div>
            <div className="mail_sender">
            {props.props[1].mailsender}
            </div>
            <div className="mail_subject">
               {props.props[1].mailsubject}
            </div>
            <div className="mail_text" >
                {props.props[1].mailtext}
            </div>
            <div className="mail_send_date">

            </div>
        </div>
    )
}
export default Mail