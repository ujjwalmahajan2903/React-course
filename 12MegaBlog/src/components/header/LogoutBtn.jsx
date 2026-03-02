import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appWrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const disPactch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            disPactch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn