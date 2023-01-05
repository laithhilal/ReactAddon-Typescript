import React from 'react'
import { UserData } from '../types'

interface IUserNameChangeComponentProps {
    user : UserData,
    onNameChanged(e : React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({user: {name}, onNameChanged} : IUserNameChangeComponentProps) => {
  return (
    <div>
        <h1>Edit UserName '{name}' here</h1>
        <input type="text" value={name} onChange={onNameChanged} />
    </div>
  )
}

export default UserNameChange