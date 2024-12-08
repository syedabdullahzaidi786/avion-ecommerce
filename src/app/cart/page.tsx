import Image from "next/image"
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ShoppingBasket() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Your shopping cart</h1>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {[
                  { name: "Graystone vase", description: "A timeless ceramic vase with a tri color grey glaze.", price: "£85" },
                  { name: "Basic white vase", description: "Beautiful and simple this is one for the classics", price: "£125" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <Image
                      src="/placeholder.svg"
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="font-medium">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <MinusIcon className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          max="99"
                          className="w-20 text-center"
                          defaultValue="1"
                        />
                        <Button variant="outline" size="icon">
                          <PlusIcon className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                        <Button variant="outline" size="icon" className="ml-auto">
                          <XIcon className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:col-span-5 lg:mt-0">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-lg font-medium mb-4">Order summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-medium">£210</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Taxes and shipping are calculated at checkout
                    </p>
                  </div>
                  <Button className="w-full">Go to checkout</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

