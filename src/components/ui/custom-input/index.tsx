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
    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
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
