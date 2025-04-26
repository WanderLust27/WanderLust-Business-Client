"use client";

import { useState } from "react";

export default function BusinessSizes() {
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const businessTypes = [
    { id: 1, name: "Small Fleets", description: "Perfect for small rental businesses" },
    { id: 2, name: "Medium Fleets", description: "Ideal for growing companies" },
    { id: 3, name: "Large Fleets", description: "Enterprise-grade solutions" },
    { id: 4, name: "Franchises", description: "Multi-location management" },
    { id: 5, name: "Specialty Rentals", description: "Luxury and specialty vehicles" },
  ];

  const handleSelect = (id: number) => {
    setSelectedType(id === selectedType ? null : id); // Toggle selection
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {businessTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleSelect(type.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium focus:outline-none ${
                selectedType === type.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border"
              }`}
              aria-pressed={selectedType === type.id}
              aria-label={`Select ${type.name}`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
