import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin= async (e)=>{
        e.preventDefault(); 
        setLoading(true)

        const userData = {username,password}
        

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
            localStorage.setItem('accesstoken',response.data.access)
            localStorage.setItem('refreshtoken',response.data.refresh)
            console.log("Login  succesfull")
            setIsLoggedIn(true)
            navigate('/')
        }catch(error){
            console.error("Invalid credentials")
            setError("Invalid credentials")
            setUserName('')
            setPassword('')

        }finally{
            setLoading(false)
        }
    }
  return (
    <>
    <div className="container mb-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 bg-light-dark p-5 rounded-4">
          <h3 className="text-light text-center mb-5">Login</h3>
          <form onSubmit={handleLogin}>
            <input type='text' className='form-control mb-4 ' placeholder='Enter your username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <input type='password' className='form-control mb-5' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {error && <div className='text-danger'>{error}</div>}
            {
                loading ? (
                    <button type='submit' className='btn btn-info d-block mx-auto' disabled>please wait...</button>
                ):(
                    <button type='submit' className='btn btn-info d-block mx-auto' >Login</button>

                )
            }
            

          </form>
        </div>

      </div>
    </div>
    </>
  )
}

export default Login