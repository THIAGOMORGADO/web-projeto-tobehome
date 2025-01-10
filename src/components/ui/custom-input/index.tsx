import { Input as BaseInput } from "@/components/ui/input";
import { Label as BaseLabel } from "@/components/ui/label";
import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <BaseInput
    {...props}
    ref={ref}
    className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302] px-2 font-normal h-8 focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
  />
));
Input.displayName = "Input";

export const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => (
  <BaseLabel
    {...props}
    ref={ref}
    className="text-sm font-medium text-gray-600"
  />
));
Label.displayName = "Label";
