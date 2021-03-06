// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

/* EXTRA CREDIT - 3 */

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
