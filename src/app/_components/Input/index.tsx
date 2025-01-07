"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { User } from "lucide-react";

type InputProps = {
  type: string;
  id: string;
  placeholder: string;
  label: string;
};

export function TextInput({ placeholder, type, id, label }: InputProps) {
  return (
    <div className="flex flex-col items-start gap-2 w-full max-w-sm">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
        <User className="w-6 h-6 m-3" />
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className="p-2 w-full border-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
