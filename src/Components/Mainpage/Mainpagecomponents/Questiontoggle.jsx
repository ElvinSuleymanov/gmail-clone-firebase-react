const QuestionMarkToggle = () => {
return (
    <div className='question_mark_toggle'>
        <div className="help btn_container">
            <button className="help_btn">Help</button>
        </div>
        <div className="training btn_container">
            <button className="training_btn">Training</button>
        </div>
        <div className="updates btn_container">
            <button className="updates_btn">Updates</button>
        </div>
        <hr />
        <div className="feedback btn_container">
            <button className="feedback_btn">Send feedback to Google</button>
        </div>
    </div>
)
}

export default QuestionMarkToggle