/* import PropTypes from 'prop-types' */
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {

  const { feedback } = useContext(FeedbackContext)
  
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length //default for the accumulator which is zero. Because acc always contains a previous value in the first iteration first value

  average = average.toFixed(1).replace(/[..]0$/, '') //this makes it to 1 decimal place and the regular expression takes off any trailing zeros! If it's zero then replace it with nothing

    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

/* FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
} */

export default FeedbackStats