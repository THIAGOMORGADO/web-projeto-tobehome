/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  id: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type = "text",
  id,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
