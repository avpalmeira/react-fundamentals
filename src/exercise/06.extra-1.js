// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

/* EXTRA CREDIT - 1 */

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    const userName = inputRef.current.value
    onSubmitUsername(userName)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName" ref={inputRef} type="text" />
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
