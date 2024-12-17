import { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput.tsx'
import Button from '../Button/Button.tsx'



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
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-8 mb-6">
        <CustomInput label="Email" invalid={emailNotValid} onChange={(e) => handleInputChange('email', e.currentTarget.value)} />
        <CustomInput label="Password" invalid={passwordNotValid} onChange={(e) => handleInputChange('password', e.currentTarget.value)} />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-600">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  )
}

export default AuthInputs
