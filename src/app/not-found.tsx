import Link from "next/link";
import { Button } from "../components/ui/button";
import { Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <Car className="h-24 w-24 text-primary mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page non trouv&eacute;e</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Oups ! Il semble que vous ayez pris un mauvais chemin. La page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="gradient-bg-purple">
          <Link href="/">Retour &agrave; l&apos;accueil</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contacter le support</Link>
        </Button>
      </div>
    </div>
  );
}
