import { InputHTMLAttributes } from 'react'


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  invalid: boolean
}

const CustomInput = ({ label, invalid, ...props }: CustomInputProps) => {

  return (
    <p>
      <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${invalid ? 'text-red-400' : 'text-stone-300'}`}>{label}</label>
      <input className={`w-full px-3 py-2 leading-tight border rounded shadow ${invalid ? 'text-red-500 bg-red-100 border-red-300' : 'bg-stone-300 text-gray-700'}`} {...props} />
    </p>
  )
}

export default CustomInput
