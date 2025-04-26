import { Button } from "@/components/ui/button";

export default function Calculator() {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Calculateur d&apos;économies pour votre entreprise</h3>
              <p className="text-sm text-gray-600">Découvrez combien vous pouvez économiser en passant à SwiftPay</p>
            </div>

            <div className="space-y-4">
              {/* Nombre d'employés */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d&apos;employés</label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  defaultValue="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>500</span>
                  <span>1000+</span>
                </div>
              </div>

              {/* Coût actuel du logiciel RH */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Coût actuel du logiciel RH (mensuel)
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  defaultValue="2000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0€</span>
                  <span>5 000€</span>
                  <span>10 000€+</span>
                </div>
              </div>

              {/* Heures du personnel RH */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Heures du personnel RH (hebdomadaire)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="40"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0h</span>
                  <span>50h</span>
                  <span>100h+</span>
                </div>
              </div>

              <Button className="w-full gradient-bg-purple mt-4">Calculer les économies</Button>
            </div>
          </div>

          {/* Right Section: Information and Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Calculez vos</span>
              <br />
              Économies d&apos;entreprise
              <br />
              Instantanément
            </h2>
            <p className="text-gray-600 mb-6">
              Notre calculateur vous aide à comprendre les économies potentielles et le retour sur investissement
              lorsque vous mettez en œuvre la solution RH de SwiftPay dans votre entreprise.
            </p>

            {/* List of benefits */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Réduisez les coûts administratifs</span> en automatisant les
                  processus RH manuels
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Gagnez du temps</span> grâce à des flux de travail rationalisés et
                  des portails en libre-service pour les employés
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Minimisez les erreurs</span> et les risques de conformité avec des
                  calculs automatisés
                </p>
              </li>
            </ul>

            <Button className="mt-6 gradient-bg-purple">Commencer</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
