import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaEdit, FaTimes } from 'react-icons/fa' //because we are using the FONT AWESOME LIBRARY
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
//state in react is immutable so it can't be directly changed, it has to be re-set

//we are passing handleDelete as a prop into feedback item and here we are catching and call it on that click
  return (
    <Card>
        <div className='num-display'> {item.rating} </div>
        <button onClick={() => deleteFeedback(item.id)} className='close'> {/* Ricorda l'arrow function se vuoi chiamare funzinoe con id o altro */}
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className='text-display'>{item.text} </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
