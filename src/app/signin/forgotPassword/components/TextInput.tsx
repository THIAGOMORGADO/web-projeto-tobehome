import { Lock, User } from 'lucide-react'
import React from 'react'
import { FieldError } from 'react-hook-form'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  password?: boolean
  error?: FieldError; // Add error prop to receive validation errors
}

export default function TextInput({ placeHolder, error, password, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border-b border-purple-500 py-2">
        {password ? <Lock className="text-purple-500 mr-2" /> : <User className="text-purple-500 mr-2" />} {/* Dynamic icon based on password prop */}
        <input
          placeholder={placeHolder}
          
          {...props}
          className={`appearance-none bg-transparent border-none w-full outline-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${error ? 'border-red-500' : ''}`}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error.message}</span>} {/* Display error message if exists */}
    </div>
  )
}
