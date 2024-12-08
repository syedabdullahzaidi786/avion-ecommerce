import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals">New arrivals</Link></li>
              <li><Link href="/best-sellers">Best sellers</Link></li>
              <li><Link href="/recently-viewed">Recently viewed</Link></li>
              <li><Link href="/popular">Popular this week</Link></li>
              <li><Link href="/all-products">All products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/crockery">Crockery</Link></li>
              <li><Link href="/furniture">Furniture</Link></li>
              <li><Link href="/homeware">Homeware</Link></li>
              <li><Link href="/plant-pots">Plant pots</Link></li>
              <li><Link href="/chairs">Chairs</Link></li>
              <li><Link href="/crockery">Crockery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Our company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/vacancies">Vacancies</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/returns">Returns policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Join our mailing list</h3>
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white text-black"
              />
              <Button type="submit" className="w-full bg-[#2A254B] border border-white text-white hover:bg-white hover:text-[#2A254B]">
                Sign up
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>Copyright 2022 Avion LTD</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
              <Link href="#" className="hover:text-gray-300">Facebook</Link>
              <Link href="#" className="hover:text-gray-300">Instagram</Link>
              <Link href="#" className="hover:text-gray-300">Skype</Link>
              <Link href="#" className="hover:text-gray-300">Twitter</Link>
              <Link href="#" className="hover:text-gray-300">Pinterest</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

