import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Upload, Database } from "lucide-react";

export default function DataImport() {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-lg p-6 order-2 md:order-1">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Importation de données Excel</h3>
              <p className="text-sm text-gray-600">
                Importez facilement vos données Excel existantes dans le système WanderLust.
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center">
              <FileSpreadsheet className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Glissez et déposez votre fichier Excel ici, ou cliquez pour parcourir.
              </p>
              <Button className="gradient-bg-purple">
                <Upload className="h-4 w-4 mr-2" />
                Télécharger le fichier Excel
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Database className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Traitement des données par IA</h4>
              </div>
              <p className="text-sm text-gray-600">
                Notre IA analysera automatiquement vos données Excel, effectuera la correspondance des champs et importera les informations de votre véhicule dans
                le système avec un minimum d&apos;intervention manuelle.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Importation de données sans effort</span>
              <br />
              d&apos;Excel vers le tableau de bord
            </h2>
            <p className="text-gray-600 mb-6">
              Dites adieu à la saisie manuelle de données. Le système intelligent d&apos;importation de WanderLust vous permet de transférer rapidement vos
              données Excel existantes dans notre tableau de bord interactif.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Correspondance intelligente des champs</span> associe automatiquement vos colonnes Excel aux champs du système.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Validation des données</span> garantit l&apos;exactitude et met en évidence les problèmes potentiels.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Importation en masse</span> vous permet d&apos;ajouter des centaines de véhicules en quelques secondes, pas en heures.
                </p>
              </li>
            </ul>
            <Button className="mt-6 gradient-bg-purple">En savoir plus</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
