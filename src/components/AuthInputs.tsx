import { useState } from 'react'

const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value)
    } else {
      setEnteredPassword(value)
    }
  }

  function handleLogin() {
    setSubmitted(true)
  }

  const emailNotValid = submitted && !enteredEmail.includes('@')
  const passwordNotValid = submitted && enteredPassword.trim().length < 6

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            style={{
              backgroundColor: emailNotValid ? 'red' : undefined
            }}
            /*className={emailNotValid ? 'invalid' : undefined}*/
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            style={{
              backgroundColor: passwordNotValid ? 'red' : '#d1d5db'
            }}
            /*className={passwordNotValid ? 'invalid' : undefined}*/
            onChange={(e) =>
              handleInputChange('password', e.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  )
}

export default AuthInputs
