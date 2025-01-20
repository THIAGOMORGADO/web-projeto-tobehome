import Image from "next/image";
// Se você estiver usando react-icons
import icons from "@/app/dashboard/corretor-dashboard/components/Svgs";

export const amenitiesData = [
  {
    label: "Pessoas",
    icon: (
      <Image
        src={icons.icons.pessoa} // Usando o ícone importado
        alt="Quartos"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "1",
    options: [...Array(10)].map((_, i) => String(i + 1)),
  },
  {
    label: "Quartos (incl. suites)",
    icon: (
      <Image
        src={icons.icons.CamaCasal} // Usando o ícone importado
        alt="Quartos"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "1",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Suites",
    icon: (
      <Image
        src={icons.icons.suite} // Usando o ícone importado
        alt="Suites"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Banheiros (incl. suites)",
    icon: (
      <Image
        src={icons.icons.banheiro1} // Usando o ícone importado
        alt="Banheiros"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Camas de casal",
    icon: (
      <Image
        src={icons.icons.cama1} // Usando o ícone importado
        alt="Camas de casal"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Camas de solteiro",
    icon: (
      <Image
        src={icons.icons.cama2} // Usando o ícone importado
        alt="Camas de solteiro"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Beliches",
    icon: (
      <Image
        src={icons.icons.beliche} // Usando o ícone importado
        alt="Beliches"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Sofá-camas",
    icon: (
      <Image
        src={icons.icons.sofaCama} // Usando o ícone importado
        alt="Sofá-camas"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Colchões",
    icon: (
      <Image
        src={icons.icons.colcha} // Usando o ícone importado
        alt="Colchões"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Ar condicionados",
    icon: (
      <Image
        src={icons.icons.arCondicionado} // Usando o ícone importado
        alt="Ar condicionados"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Ventiladores",
    icon: (
      <Image
        src={icons.icons.ventilador} // Usando o ícone importado
        alt="Ventiladores"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
  {
    label: "Garagem",
    icon: (
      <Image
        src={icons.icons.garagem} // Usando o ícone importado
        alt="Garagem"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    defaultValue: "0",
    options: [...Array(10)].map((_, i) => String(i)),
  },
];
