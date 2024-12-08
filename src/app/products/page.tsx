import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  { name: "The Dandy chair", price: "£250" },
  { name: "Rustic Vase Set", price: "£155" },
  { name: "The Silky Vase", price: "£125" },
  { name: "The Lucy Lamp", price: "£399" },
  { name: "The Dandy chair", price: "£250" },
  { name: "Rustic Vase Set", price: "£155" },
  { name: "The Silky Vase", price: "£125" },
  { name: "The Lucy Lamp", price: "£399" },
]

export default function ProductListing() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">All products</h1>
          <div className="grid gap-8 md:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="group relative">
                <Link href={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} className="block overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={product.name}
                    width={400}
                    height={400}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium">
                    <Link href={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load more</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

