import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { catalogItems } from "@/app/mock/catalogos";

export default function Catalog() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-12">
          Explore Nossos Catálogos
        </h2>
        <Tabs defaultValue="temporada" className="w-full container">
          <TabsList className="mx-auto flex flex-wrap justify-center space-x-4 sm:space-x-10 mb-20">
            <TabsTrigger
              value="temporada"
              className="px-5 py-3 text-base sm:text-lg font-medium text-primary bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all transform hover:scale-110"
            >
              Temporada
            </TabsTrigger>
            <TabsTrigger
              value="periodoEspecifico"
              className="px-5 py-3 text-base sm:text-lg font-medium text-primary bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all transform hover:scale-110"
            >
              Período Específico
            </TabsTrigger>
            <TabsTrigger
              value="aluguelCompra"
              className="px-5 py-3 text-base sm:text-lg font-medium text-primary bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all transform hover:scale-110"
            >
              Aluguel e Compra
            </TabsTrigger>
          </TabsList>
          {Object.entries(catalogItems).map(([category, items]) => (
            <TabsContent
              key={category}
              value={category}
              className="flex justify-center"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-3 text-primary">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 mb-5">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">
                          {category === "aluguelCompra"
                            ? item.price
                            : `A partir de ${item.price}`}
                        </span>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
                        >
                          Saiba Mais
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
