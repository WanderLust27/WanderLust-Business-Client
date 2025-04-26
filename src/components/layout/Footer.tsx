import Link from "next/link"
import { Car } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Car className="h-6 w-6 text-primary" />
              <span className="gradient-text">WanderLust</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Solution intelligente de gestion de flotte automobile avec analyses propulsées par l&apos;IA.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fonctionnalites" className="text-gray-600 hover:text-primary">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Tarification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Intégrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} WanderLust. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
