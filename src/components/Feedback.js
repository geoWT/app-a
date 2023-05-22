import { useState } from 'react';
import Modal from 'react-modal';
import { Dialogue, CustomPopUp } from './DialogueUponFeedback';

export const FeedbackForm =() => {
    const [score, setScore] = useState("10"); // Initial value = 10
    const [comment, setComment] = useState('') // Initial value = empty string
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.trim() === '' ) {
            setShowPopup(true)
            return;
        }
        console.log("Form submitted!")
        setScore("10")
        setComment("")
        }
    
        const handlePopupClose = () => {
            setShowPopup(false);
    }

    return(
        <div className='FeedbackForm'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Feedback form</h1>
                    <div className='Field'>
                        <label>Score: {score}</label>
                        <input type='range' 
                        min='0' 
                        max='10' 
                        value={score} 
                        onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div classname='Field'>
                        <label>Comment: </label>
                        <textarea value={comment} 
                        onChange={(e => setComment(e.target.value))} 
                        />
                    </div>
                    <div className='Field'>
                        <label>Submit: </label>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    {showPopup && <CustomPopUp onClose={handlePopupClose} />}
                </fieldset>
            </form>
        </div>
    );
}