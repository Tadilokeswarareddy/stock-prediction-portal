import { useContext } from "react"
import {AuthContext} from '../src/AuthProvider'
import {Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashbord' />
  )
}

export default PublicRoute