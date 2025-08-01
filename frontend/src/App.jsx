import PublicRoute from './PublicRoute'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashbord from './components/dashbord/Dashbord'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/dashbord' element={<PrivateRoute><Dashbord/></PrivateRoute>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
      

    </div>
  )
}

export default App