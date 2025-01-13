import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookingForm() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Faça sua Reserva
        </h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="check-in"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-in
                </Label>
                <Input
                  type="date"
                  id="check-in"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="check-out"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-out
                </Label>
                <Input
                  type="date"
                  id="check-out"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700"
              >
                Número de Hóspedes
              </Label>
              <div>
                <select
                  id="guests"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1">1 Hóspede</option>
                  <option value="2">2 Hóspedes</option>
                  <option value="3">3 Hóspedes</option>
                  <option value="4">4 Hóspedes</option>
                </select>
              </div>
            </div>
            <div>
              <Label
                htmlFor="room-type"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Quarto
              </Label>
              <div>
                <select
                  id="room-type"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Verificar Disponibilidade
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
