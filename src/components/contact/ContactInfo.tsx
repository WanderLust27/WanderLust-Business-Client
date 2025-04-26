import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
      <p className="text-gray-600 mb-8">
        Vous avez des questions à propos de WanderLust ? Notre équipe est là pour vous aider. Contactez-nous par l&apos;une des méthodes ci-dessous.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Visitez-nous</h3>
            <p className="text-gray-600">
              123 Boulevard de la Technologie
              <br />
              Quartier de l&apos;Innovation
              <br />
              Paris, 75001
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Appelez-nous</h3>
            <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Envoyez-nous un email</h3>
            <p className="text-gray-600">info@wanderlust-fleet.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Horaires d&apos;ouverture</h3>
            <p className="text-gray-600">
              Lundi - Vendredi : 9h00 - 18h00
              <br />
              Samedi : 10h00 - 16h00
              <br />
              Dimanche : Fermé
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
