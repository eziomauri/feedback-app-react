import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

//in feedbackitem we call editFeedback, which uses CONTEXT useState Hook to setFeedback edit and change edit: true (so we know what has been selected) in the FeedbackContext. Then in FeedbackForm we pass feedbackEdit (which has been changed in FeedbackContext after we called  editFeedback in feedbackitem), and then we do useEffect to check everytime there is a feedbackEdit.edit === true everytime feedbackedit changes! GENIUS

const FeedbackFrom = () => {
  
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text) //the object is feedbackEdit.item
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]) //we want the form to get text and rating from the current selected cardso this is an effect or side effect --> we use useEffect to deal with this

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text, // it's the same as text: text,
        rating // rating: rating,
      }
      
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else { 
        addFeedback(newFeedback)
      }   
    }

    // NOTE: reset to default state after submission
    setBtnDisabled(true) // 👈  add this line to reset disabled
    setRating(10) //👈 add this line to set rating back to 10
    setText('')
  }
  
  return (
    <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect selected={rating} setSelect={setRating}/>
          <div className="input-group">
            <input 
              onChange={handleTextChange} 
              type='text' 
              placeholder='Write a review'
              value={text}/>
            <Button type='submit' isDisabled={btnDisabled}> {feedbackEdit.edit === true ? 'Save' : 'Send'}</Button>
          </div>

          {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackFrom