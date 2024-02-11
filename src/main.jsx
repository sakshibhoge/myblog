import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import {Provider} from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from'./Pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import EditPost from './Pages/EditPost.jsx'
import AddPost from './Pages/AddPost.jsx'
import Post from './Pages/Post.jsx'
import  AllPosts from'./Pages/AllPosts.jsx'

const router=createBrowserRouter([{
path:"/",
element:<App/>,
children:[
  {
  
path:"./Home",
element:<Home/>,
  },
  {
path:"./login",
element:(
<AuthLayout authentication={false}>
  <Login/></AuthLayout>),
  },{
    path:"./signup",
    element:(
    <AuthLayout authentication>{false}<Signup/></AuthLayout>),
  },
  {
    path:"./Edit-Posts/:slug",
    element:(
    <AuthLayout authentication>{""}<EditPost/></AuthLayout>),
  },
  {
path:"./All-Posts",
element:(
<AuthLayout><AllPosts/></AuthLayout>),
  },
  {
    path:"./add-post",
    element:(
    <AuthLayout authentication>{""}<AddPost/></AuthLayout>),
  },
  {
    path:"./post/:slug",
    element:
    <Post/>,
    
  }
  


]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
<RouterProvider router={router}/></Provider>
  </React.StrictMode>,
)
