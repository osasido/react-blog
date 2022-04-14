import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const Home =()=> {
      return (
      <View>
        <Text>pages</Text>
      </View>
    )
  }
  export const About =()=> {
    return (
    <View>
      <Text>about</Text>
      <Outlet/>
    </View>
  )
}
export const Services =()=>{
    return (
        <View>
          <Text>Services</Text>
          
        </View>
      )
}
export const History =()=>{
    return (
        <View>
          <Text>History</Text>
          
        </View>
      )
}
export const Events =()=> {
    return (
    <View>
      <Text>Events</Text>
    </View>
  )
}
export const Contacts =()=> {
    return (
    <View>
      <Text>contacts</Text>
    </View>
  )
}
export const Error404 =()=>{
    let location= useLocation()
    return (
        <View>
            <h1>ERROR 404</h1>
          <Text>The path you entered is invalid  at {location.pathname}</Text>
          
        </View>
      )
}