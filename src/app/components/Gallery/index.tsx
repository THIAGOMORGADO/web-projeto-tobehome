"use client";
import Image from "next/image";

import Casa2 from "@/app/assets/carrousel2.jpg";
import { useState } from "react";

const images = [Casa2, Casa2, Casa2, Casa2, Casa2, Casa2];

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(images.length / itemsPerPage)
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(images.length / itemsPerPage)) %
        Math.ceil(images.length / itemsPerPage)
    );
  };

  const paginatedImages = images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Galeria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedImages.map((src, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 mx-1 text-white bg-primary rounded-md hover:bg-primary-dark"
          >
            Anterior
          </button>
          <span className="px-4 py-2 mx-1 text-gray-700 bg-white rounded-md">
            {currentPage + 1} / {Math.ceil(images.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 mx-1 text-white bg-primary rounded-md hover:bg-primary-dark"
          >
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}
