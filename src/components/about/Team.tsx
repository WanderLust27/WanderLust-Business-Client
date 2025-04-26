import Image from "next/image";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Alexandre Dubois",
      role: "PDG & Co-Fondateur",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Directrice Technique & Co-Fondatrice",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Marco Rodriguez",
      role: "Responsable Produit",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Leila Khoury",
      role: "Responsable IA & Analyse",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Équipe de Direction</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les talents qui portent la mission de WanderLust&nbsp;: révolutionner la gestion de location de voitures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 responsive-grid">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
