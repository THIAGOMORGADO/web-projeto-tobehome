/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

// Define uma interface para as props
interface SelectInputProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string; // Título do componente
  options: number[]; // Array de opções para o select
  srcUrl: any; // URL da imagem
  onOptionChange?: (value: number) => void; // Callback ao mudar a opção
}

const SelectInput: React.FC<SelectInputProps> = ({
  title,
  options,
  srcUrl,
  onOptionChange,
  ...rest // Captura todas as outras props
}) => {
  // Função para lidar com a mudança de seleção
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    if (onOptionChange) {
      onOptionChange(selectedValue);
    }
  };

  return (
    <div {...rest}>
      <div className="flex p-10">
        <Image src={srcUrl} alt="urloptions" width={50} height={20} />
        <div className="flex flex-col gap-2">
          <h1>{title}</h1>
          <select onChange={handleChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
