import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import { login,logout } from './store/authslice'

function App() {

  const[loading,setloading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() =>{
    authservice.currentuser()
    .then((userdata)=>{
      if (userdata) {
        dispatch (login(userdata))
      }else {
        dispatch (logout())
      }
    })
    .finally(()=>setloading(false))
  },[])

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block '>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App