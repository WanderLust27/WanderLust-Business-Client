import { Button } from "@/components/ui/button";

export default function FeatureHero() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Fonctionnalités complètes</span>
            <br />
            Pour la gestion de la location de voitures
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            De la gestion de flotte à l&apos;analyse alimentée par l&apos;IA, WanderLust vous fournit tous les outils nécessaires pour
            rationaliser vos opérations de location de voitures et maximiser la rentabilité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg-purple">
              Explorer les fonctionnalités
            </Button>
            <Button variant="outline" size="lg">
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
