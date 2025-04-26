import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jean-Pierre Moreau",
      company: "EuroDrive Rentals",
      quote:
        "WanderLust a complètement transformé la gestion de notre flotte. L'analyse alimentée par l'IA nous a permis d'optimiser l'allocation et les tarifs de nos véhicules, entraînant une augmentation de 15% de notre chiffre d'affaires.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Maria Garcia",
      company: "Sunshine Car Rentals",
      quote:
        "À mesure que notre entreprise grandissait, nos besoins en gestion de flotte devenaient plus complexes. WanderLust a évolué avec nous à chaque étape, en fournissant les outils nécessaires pour gérer efficacement notre flotte en expansion.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Robert Johnson",
      company: "Luxury Wheels Inc.",
      quote:
        "La fonctionnalité d'importation Excel nous a fait gagner d'innombrables heures de saisie manuelle. Nous avons pu migrer toute notre base de données en quelques minutes, et l'IA a tout organisé automatiquement à la perfection.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ne vous fiez pas seulement à notre parole. Voici ce que des entreprises de location comme la vôtre pensent de WanderLust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 responsive-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    aria-label={`Star rating ${index + 1}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
