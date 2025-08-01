import React, { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('refreshtoken')
    setIsLoggedIn(false)
    navigate('/login')

  }
  return (
    <>
        <nav className='navbar container pt-3 pb-3 '>
            <Link to='/' className='navbar-brand text-light'>Stock Prediction Portal</Link>
            <div>
              {isLoggedIn ? (
                <>
                <Button text='Dashbord' url='/dashbord' className='btn-outline'/>
                &nbsp;
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </>
              ):(
                <>
                <Button text='Login' url='/login'/>
                &nbsp;
                <Button text='Register' url='register'/>
                </>
              )}

            </div>
        </nav>
    </>
  )
}

export default Header