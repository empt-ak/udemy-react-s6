import { useState } from 'react'
import { styled } from 'styled-components'
import CustomInput from '../CustomInput/CustomInput.tsx'

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`


const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`

const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (identifier: string, value: string) => {
    if (identifier === 'email') {
      setEnteredEmail(value)
    } else {
      setEnteredPassword(value)
    }
  }

  const handleLogin = () => {
    setSubmitted(true)
  }

  const emailNotValid = submitted && !enteredEmail.includes('@')
  const passwordNotValid = submitted && enteredPassword.trim().length < 6

  return (
    <div id="auth-inputs">
      <ControlDiv>
        <CustomInput label="Email" invalid={emailNotValid} onChange={(e) => handleInputChange('email', e.currentTarget.value)} />
        <CustomInput label="Password" invalid={passwordNotValid} onChange={(e) => handleInputChange('password', e.currentTarget.value)} />
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  )
}

export default AuthInputs
