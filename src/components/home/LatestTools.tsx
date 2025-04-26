import { Button } from "@/components/ui/button";

export default function LatestTools() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-400">Restez à jour</span>
              <br />
              avec les <span className="gradient-text">dernier outils</span>
              <br />
              de SwiftPay
            </h2>
            <p className="text-gray-600 mb-6">
              Notre plateforme évolue constamment avec de nouvelles fonctionnalités et améliorations pour vous aider à gérer vos opérations RH de manière plus efficace.
            </p>
            <Button className="gradient-bg-purple hover:bg-purple-700 focus:ring-2 focus:ring-purple-500" aria-label="En savoir plus sur les outils">
              En savoir plus
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Traitement automatisé de la paie</h3>
              </div>
              <p className="text-sm text-gray-600">
                Gagnez du temps et réduisez les erreurs avec notre système de paie automatisé qui gère les calculs, les impôts et les paiements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Analyse des performances</h3>
              </div>
              <p className="text-sm text-gray-600">
                Suivez les performances des employés avec des métriques personnalisables et générez des rapports détaillés pour de meilleures prises de décision.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium">Gestion des congés</h3>
              </div>
              <p className="text-sm text-gray-600">
                Simplifiez les demandes de vacances et de congé avec un système intuitif qui s&apos;intègre à votre calendrier et à la paie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
