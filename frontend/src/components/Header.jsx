import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 '>
            <a className='navbar-brand text-light' href=''>Stock Prediction Portal</a>
            <div>
                <Button text='Login'/>
                &nbsp;
                <Button text='Register'/>
            </div>
        </nav>
    </>
  )
}

export default Header