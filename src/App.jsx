import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom' //uses HTML5 history API to keep the users interface in sync with the URL
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />}/> 
          </Routes>

            {/* active is the className */}
  {/*         <Card>
            <NavLink to='/' activeClassName='active'> 
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </Card> */}
        <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App