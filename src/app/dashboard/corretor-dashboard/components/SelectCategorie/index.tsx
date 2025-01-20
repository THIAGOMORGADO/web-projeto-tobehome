"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home } from "lucide-react";

import casa1 from "@/app/assets/casa01.jpg";
import casa2 from "@/app/assets/casa02.jpg";
import casa3 from "@/app/assets/casa03.jpg";

const SelectIcon = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: "house",
      label: "Casa",
      description: "usar também para bangalô, cabana, casa de campo, chalé",
      icon: <Home className="w-10 h-10" />, // Exemplo com Lucide
    },
    {
      id: "house",
      label: "Casa",
      description: "usar também para bangalô, cabana, casa de campo, chalé",
      icon: <Home className="w-10 h-10" />, // Exemplo com Lucide
    },
    // Adicione mais opções aqui, se necessário
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="sm:flex sm:flex-row space-y-4">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
            selectedOption === option.id
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
          onClick={() => handleSelect(option.id)}
        >
          <input
            type="radio"
            name="select-icon"
            checked={selectedOption === option.id}
            onChange={() => handleSelect(option.id)}
            className="hidden"
          />
          <div className="mr-4">{option.icon}</div>
          <div>
            <h1 className="text-lg font-semibold">{option.label}</h1>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectIcon;
