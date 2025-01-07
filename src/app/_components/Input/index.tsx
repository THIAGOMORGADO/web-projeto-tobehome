"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputProps = {
  type: string;
  id: string;
  placeholder: string;
  label: string;
  className?: string;
};

export function TextInput({
  placeholder,
  type,
  id,
  label,
  className,
}: InputProps) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className={className}>
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className={className}
        />
      </div>
    </div>
  );
}
