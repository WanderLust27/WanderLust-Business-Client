export default function Map() {
    return (
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-4">Notre emplacement</h3>
        <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
          {/* Dans une vraie application, vous pourriez intégrer une carte Google ou similaire ici */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Espace réservé pour la carte</p>
          </div>
        </div>
      </div>
    )
  }
  