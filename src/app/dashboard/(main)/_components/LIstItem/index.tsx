"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import logo from "@/app/assets/carrousel1.jpg";
import Link from "next/link";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: logo,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: logo,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image: logo,
  },
  {
    id: 4,
    name: "Product 4",
    price: "$49.99",
    image: logo,
  },
];

export default function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto mb-4 rounded-md"
                  />
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>

                  <Link href="/dashboard/Imoveis">Ver o Imovel</Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
