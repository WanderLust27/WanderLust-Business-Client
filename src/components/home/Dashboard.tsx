import { Car } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gérer votre flotte</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Obtenez une visibilité complète sur vos opérations de location de voitures grâce à des outils d&apos;analyse et de reporting puissants.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Véhicules Totaux</h3>
                </div>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold">124</p>
                  <p className="ml-2 text-sm text-green-600">+8%</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Locations Actives</h3>
                </div>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold">86</p>
                  <p className="ml-2 text-sm text-green-600">+12%</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Maintenance</h3>
                </div>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold">12</p>
                  <p className="ml-2 text-sm text-red-600">+3</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Revenu Moyen</h3>
                </div>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold">€85</p>
                  <p className="ml-2 text-sm text-green-600">+5%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Flotte de Véhicules</h3>
              <div className="flex gap-2">
                <button className="text-sm bg-primary text-white px-4 py-2 rounded-md">Ajouter un Véhicule</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Véhicule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarif Journalier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[ 
                    {
                      id: 1,
                      name: "Toyota Corolla",
                      category: "Économie",
                      status: "Disponible",
                      rate: "€45",
                    },
                    {
                      id: 2,
                      name: "Volkswagen Golf",
                      category: "Compact",
                      status: "Loué",
                      rate: "€55",
                    },
                    {
                      id: 3,
                      name: "BMW 3 Series",
                      category: "Premium",
                      status: "En Maintenance",
                      rate: "€95",
                    },
                    {
                      id: 4,
                      name: "Mercedes C-Class",
                      category: "Premium",
                      status: "Disponible",
                      rate: "€105",
                    },
                    {
                      id: 5,
                      name: "Renault Clio",
                      category: "Économie",
                      status: "Loué",
                      rate: "€40",
                    },
                  ].map((car) => (
                    <tr key={car.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Car className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{car.name}</div>
                            <div className="text-sm text-gray-500">
                              ID: VH-{car.id}00{car.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{car.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            car.status === "Disponible"
                              ? "bg-green-100 text-green-800"
                              : car.status === "Loué"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {car.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{car.rate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary hover:text-primary-dark">Éditer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
