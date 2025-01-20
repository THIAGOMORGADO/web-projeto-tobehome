export type PropertyType = "casa" | "apartamento" | "chacara";

export interface PropertyTypeOption {
  id: PropertyType;
  title: string;
  description: string;
  icon: string;
}

export interface PropertyTypeProps {
  value?: PropertyType;
  onChange?: (value: PropertyType) => void;
  options?: PropertyTypeOption[];
}
