import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault;
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login </h2>
        <input type='text' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        <br/><br/>
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <br/><br/>
    </div>
  )
}

export default Login