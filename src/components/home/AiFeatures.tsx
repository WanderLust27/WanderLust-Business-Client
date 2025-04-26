import { Button } from "@/components/ui/button";
import { BarChart, TrendingUp, LineChart } from "lucide-react";

export default function AiFeatures() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-400">Propulsé par l&apos;IA</span>
              <br />
              <span className="gradient-text">Analyses et Insights</span>
              <br />
              pour votre flotte
            </h2>
            <p className="text-gray-600 mb-6">
              Notre plateforme utilise l&apos;intelligence artificielle pour analyser vos données de location et fournir des insights actionnables afin d&apos;optimiser les opérations de votre flotte et maximiser la rentabilité.
            </p>
            <Button className="gradient-bg-purple">Explorer les fonctionnalités IA</Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Maintenance prédictive</h3>
              </div>
              <p className="text-sm text-gray-600">
                Les algorithmes IA prédisent quand les véhicules nécessitent une maintenance en fonction des patterns d&apos;utilisation, évitant ainsi les pannes et réduisant les temps d&apos;arrêt.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Prévision de la demande</h3>
              </div>
              <p className="text-sm text-gray-600">
                Prévoyez les patterns de demande de location afin d&apos;optimiser les prix et la disponibilité de la flotte, maximisant ainsi vos revenus pendant les périodes de pointe.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Analyse des performances</h3>
              </div>
              <p className="text-sm text-gray-600">
                Des analyses détaillées sur les performances des véhicules, les patterns de location et la génération de revenus pour vous aider à prendre des décisions basées sur les données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
