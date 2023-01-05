import React from 'react'
import { UserData } from '../types'

interface IUserNameComponentProps {
    user : UserData
}

const UserName = ({user: {name}} : IUserNameComponentProps) => {
  return (
    <h1><i>{name}</i></h1>
  )
}

export default UserName