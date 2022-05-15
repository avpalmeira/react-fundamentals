// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

/* EXTRA CREDIT - 2 */

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleChange = () => {
    const value = inputRef.current.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const userName = inputRef.current.value
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          onChange={handleChange}
          ref={inputRef}
          type="text"
        />
      </div>
      <button disabled={error !== null} type="submit">
        Submit
      </button>
      {error && (
        <span role="alert" style={{color: 'red'}}>
          {error}
        </span>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
