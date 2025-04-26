import { Button } from "../../components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Votre solution{" "}
              <span className="gradient-text">
                tout-en-un de gestion de location de voitures
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Optimisez vos opérations de flotte avec la plateforme intelligente
              de WanderLust. Réduisez les coûts en automatisant les processus de
              location tout en exploitant les analyses alimentées par l&apos;IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="gradient-bg-purple hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
              >
                Commencer
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-gray-100 focus:ring-2 focus:ring-purple-500"
              >
                Demander une démo
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg"
              alt="Tableau de bord de location de voitures"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
