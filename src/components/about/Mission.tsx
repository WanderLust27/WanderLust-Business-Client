export default function Mission() {
    return (
      <div className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-gray-600 mb-4">
                Chez WanderLust, nous pensons que la gestion d&apos;une flotte de location ne devrait pas être un fardeau.
                Notre mission est de simplifier les opérations de location pour permettre aux entreprises de se concentrer
                sur ce qu&apos;elles font de mieux&nbsp;: offrir un service d&apos;excellence à leurs clients.
              </p>
              <p className="text-gray-600">
                Nous nous engageons à fournir des solutions à la fois puissantes, complètes, intuitives et agréables à utiliser.
                En combinant une technologie d&apos;IA de pointe à un design réfléchi, nous créons un nouveau standard pour la gestion de location de véhicules.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold gradient-text mb-2">2019</div>
                <p className="text-sm text-gray-600">Année de création</p>
              </div>
  
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <p className="text-sm text-gray-600">Entreprises partenaires</p>
              </div>
  
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <p className="text-sm text-gray-600">Satisfaction client</p>
              </div>
  
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-sm text-gray-600">Support client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  