import React from 'react'
import { UserData } from '../types'

interface IUserAddressComponentProps {
    user : UserData
}

const UserAddress = ( {user : {address}} : IUserAddressComponentProps) => {
  return (
    <div><b>{address}</b></div>
  )
}

export default UserAddress