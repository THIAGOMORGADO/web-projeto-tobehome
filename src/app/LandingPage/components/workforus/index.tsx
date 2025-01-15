import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Home,
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  Award,
} from "lucide-react";
import { JobDetailsModal } from "@/app/LandingPage/components/JobFromModel";

export default function TrabalheConosco() {
  const beneficios = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      text: "Oportunidades de crescimento na carreira imobiliária",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-500" />,
      text: "Comissões atrativas e bônus por desempenho",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      text: "Equipe colaborativa e suporte contínuo",
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      text: "Treinamentos e certificações no setor imobiliário",
    },
  ];

  const vagasAbertas = [
    { titulo: "Corretor de Imóveis", departamento: "Vendas" },
    {
      titulo: "Especialista em Marketing Imobiliário",
      departamento: "Marketing",
    },
    { titulo: "Analista de Avaliação de Imóveis", departamento: "Avaliação" },
    { titulo: "Gerente de Locação", departamento: "Locação" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Venha Trabalhar na Nossa Imobiliária
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Construa uma carreira sólida no mercado imobiliário conosco
          </p>
          <Button size="lg">Ver Oportunidades</Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Por que se juntar à nossa equipe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {beneficio.icon}
                    <span className="ml-2">{beneficio.text}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Vagas em Aberto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vagasAbertas.map((vaga, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{vaga.titulo}</CardTitle>
                  <CardDescription>{vaga.departamento}</CardDescription>
                </CardHeader>
                <CardContent>
                  <JobDetailsModal
                    title={vaga.titulo}
                    department={vaga.departamento}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Nossa Cultura</h2>
          <p className="text-xl text-gray-600 mb-8">
            Valorizamos a excelência no atendimento ao cliente, integridade nas
            negociações e o desenvolvimento contínuo de nossos profissionais.
            Aqui, você terá a oportunidade de crescer em um mercado dinâmico e
            fazer a diferença na vida das pessoas.
          </p>
          <Button variant="secondary" size="lg">
            Conheça Nossa Equipe
          </Button>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            O Que Oferecemos
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-center">
              <Home className="h-6 w-6 text-blue-500 mr-2" />
              Portfólio diversificado de propriedades
            </li>
            <li className="flex items-center">
              <Briefcase className="h-6 w-6 text-blue-500 mr-2" />
              Ferramentas e tecnologias de ponta
            </li>
            <li className="flex items-center">
              <Users className="h-6 w-6 text-blue-500 mr-2" />
              Networking com profissionais experientes
            </li>
            <li className="flex items-center">
              <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
              Plano de carreira estruturado
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Pronto para iniciar sua carreira conosco?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Estamos sempre em busca de talentos apaixonados pelo mercado
            imobiliário para fazer parte da nossa equipe.
          </p>
          <Button size="lg">Candidate-se Agora</Button>
        </section>
      </main>
    </div>
  );
}
