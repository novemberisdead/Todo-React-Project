import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Login,Signup,TodoApp,AuthLayout} from "./Components/index.js"
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Store } from './store/store.js'


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: (
        <AuthLayout authentication>
          <TodoApp/>
        </AuthLayout>
      )
    },
    {
      path: "/signup",
      element : (
        <AuthLayout authentication ={false}>
          <Signup/>
        </AuthLayout>
      )
    },
    {
      path: "/login",
      element : (
        <AuthLayout authentication ={false}>
          <Login/>
        </AuthLayout>
      )
    },
]
}])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <RouterProvider router={router}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </RouterProvider>
    </Provider>
  )
