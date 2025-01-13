import {
  House,
  BadgeDollarSignIcon,
  TreePalmIcon,
  CalendarSearchIcon,
} from "lucide-react";

const features = [
  {
    icon: CalendarSearchIcon,
    title: "Aluguel por Temporada",
    description:
      "Oferecemos opções de aluguel para férias em locais selecionados.",
  },
  {
    icon: TreePalmIcon,
    title: "Aluguel por Períodos Específicos",
    description:
      "Flexibilidade para alugar imóveis por períodos curtos ou longos.",
  },
  {
    icon: BadgeDollarSignIcon,
    title: "Financiamento Imobiliário",
    description:
      "Oferecemos opções de financiamento para facilitar sua compra.",
  },
  {
    icon: House,
    title: "Compra e Venda de Imóveis",
    description: "Facilitamos todo o processo de compra e venda de imóveis.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
