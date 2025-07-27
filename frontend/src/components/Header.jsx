import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 '>
            <Link to='/' className='navbar-brand text-light'>Stock Prediction Portal</Link>
            <div>
                <Button text='Login' url='/login'/>
                &nbsp;
                <Button text='Register' url='register'/>
            </div>
        </nav>
    </>
  )
}

export default Header