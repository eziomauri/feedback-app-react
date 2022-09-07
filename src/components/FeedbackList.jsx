import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
/* import PropTypes from 'prop-types' */

const FeedbackList = () => {

  const {feedback} = useContext(FeedbackContext) //passing the context

  if(!feedback || feedback.length === 0){
     return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>

            <FeedbackItem 
              key={item.id} 
              item={item} />

          </motion.div>
            ))}
      </AnimatePresence>
    </div>
  )

/*   return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem 
              key={item.id} 
              item={item} 
              handleDelete={handleDelete}/>
            ))
        }
    </div>
  ) */
}

// not needing this because we are using the context hook
/* 
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({ //this is to define more specifically the array that is passed, otherwise you can just leave the ARRAY
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
} */

export default FeedbackList