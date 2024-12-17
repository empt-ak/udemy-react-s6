import { useState } from 'react'
import { styled } from 'styled-components'

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Label = styled.label<{'$invalid'? : boolean}>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props['$invalid'] ? '#f87171' : '#6b7280'};
`

const Input = styled.input<{'$invalid': boolean}>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => props['$invalid'] ? '#fed2d2' : '#d1d5db'};
  color: ${(props) => props['$invalid'] ? '#ef4444':'#374151'};
  border: 1px solid ${(props) => props['$invalid'] ? '#f73f3f' : 'transparent'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
        <p className="paragraph">
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(e) =>
              handleInputChange('password', e.target.value)
            }
          />
        </p>
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
