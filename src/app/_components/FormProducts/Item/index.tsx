/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

type ProductItemProps = {
  onChange?: (value: string) => void; // Callback para capturar mudanças
  value?: string; // Valor associado ao input
  checked?: boolean;
  productSrc: string;
  productTitle: string;
  productsDescription: string;
};

export default function ProductItem({
  productTitle,
  productsDescription,
  productSrc,

  onChange,
  value,
  checked,
}: ProductItemProps) {
  return (
    <div>
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex gap-4 items-center">
          <input
            type="radio"
            id="house1"
            name="product"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            checked={checked}
          />
          <Image src={productSrc} className="w-16 h-16" alt="logo" />
        </div>
        <div className="ml-9 flex flex-col-reverse">
          <h2 className="text-lg font-semibold">{productsDescription}</h2>
          <p className="text-sm text-gray-600">{productTitle}.</p>
        </div>
      </div>
    </div>
  );
}
