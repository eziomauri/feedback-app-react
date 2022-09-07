import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// create a provider to allow access to access everything. 
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10,
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 5,
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 7,
        }
    ])
    const [feedbackEdit, setFeedbackEdit] =useState({
        item: {},
        edit: false,
    })

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id)) 
          //b/c it's delete
        }
      }

    // To add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider  value={{
        feedback, /* short for --> feedback: feedback, */
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children} {/* all of our components that need to access to our context*/}
    </FeedbackContext.Provider>
}

export default FeedbackContext