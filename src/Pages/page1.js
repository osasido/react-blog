import React  from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {BiArchive} from 'react-icons/bi'


export const Home =()=> {
      return (
     <div className='App Container mx-auto mt-3 font-thin'>
      <h1 className='bg-yellow text-5xl'>home</h1> 
     </div>
    )
  }
  export const About =()=> {
    return (
    <div>
      <text>about</text>
      <Outlet/>
    </div>
  )
}
export const Services =()=>{
    return (
        <div>
          <text>Services</text>
          
        </div>
      )
}
export const History =()=>{
    return (
        <div>
          <text>History</text>
          
        </div>
      )
}
export const Events =()=> {
    return (
    <div>
      <text>Events</text>
    </div>
  )
}
export const Contacts =()=> {
    return (
    <div>
      <text>contacts</text>
    </div>
  )
}
export const Error404 =()=>{
    let location= useLocation()
    return (
        <div>
            <h1>ERROR 404</h1>
          <text>The path you entered is invalid  at {location.pathname}</text>
          
        </div>
      )
}