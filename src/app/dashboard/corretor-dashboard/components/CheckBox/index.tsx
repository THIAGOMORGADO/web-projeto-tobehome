"use client";

import { amenitiesData } from "@/app/mock/proppety";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Caminho corrigido

export default function PropertyAmenities() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-xl font-semibold mb-6">2. Características básicas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenitiesData.map(({ label, icon, defaultValue, options }) => (
          <div className="flex items-center gap-3" key={label}>
            {icon}
            <div className="flex-1">
              <label className="block text-sm mb-1.5">{label}</label>
              <Select defaultValue={defaultValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
