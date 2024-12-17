import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (<button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-600" {...props}>
    {children}
  </button>)
}

export default Button