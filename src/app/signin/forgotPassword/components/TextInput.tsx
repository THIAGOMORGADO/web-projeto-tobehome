import { User } from 'lucide-react'
import React from 'react'

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

export default function TextInput({ value, onChange, placeHolder }: TextInputProps) {
  return (
    <div className="flex items-center border-b border-purple-500 py-2">
      <User className="text-purple-500 mr-2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  )
}
