import Link from "next/link"
import { Search, ShoppingCart, User } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="w-full py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-between w-full">
            <Search className="h-5 w-5" />
            <Link href="/" className="text-xl">
              Avion
            </Link>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-5 w-5" />
              <User className="h-5 w-5" />
            </div>
          </div>
          <nav className="hidden md:flex items-center justify-center space-x-8 w-full">
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/plant-pots">
              Plant pots
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/ceramics">
              Ceramics
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/tables">
              Tables
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/chairs">
              Chairs
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/crockery">
              Crockery
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/tableware">
              Tableware
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" href="/cutlery">
              Cutlery
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

