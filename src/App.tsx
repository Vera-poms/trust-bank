import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Login from './components/Login/Login'
import UserDashboard from './components/Dashboard/UserDashboard'
import AccountForms from './components/OpenAccount/AccountForms'
import OpenAccount from './components/OpenAccount/OpenAccount'
import Services from './components/Services/Services'
import Loans from './components/Loans/Loans'
import Investment from './components/Invest and Save/Investment'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
      const toggleMenu = () => {
        setIsMenuOpen(i => !i)
      }

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Homepage isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}/>
        }/>
        <Route path='/accountOpeningGuide' element={
          <OpenAccount/>
        }/>
        <Route path='/services' element={
          <Services/>
        }/>
        <Route path='/login' element={
          <Login/>
        }/>
        <Route path='/user/dashboard' element={
          <UserDashboard/>
        }/>
        <Route path='/openAccount' element={
          <AccountForms/>
        }/>
        <Route path='/loans' element={
          <Loans/>
        }/>
        <Route path='/investment' element={
          <Investment/>
        }/>
      </Routes>
    </Router>
  )
}

export default App
