import Image from "next/image"
import Link from "next/link"
import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg"
                alt="Product Image"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">The Dandy Chair</h1>
                <p className="text-2xl font-bold">£250</p>
              </div>
              <div className="space-y-4">
                <h2 className="font-medium">Description</h2>
                <p className="text-muted-foreground">
                  A timeless design, with premium materials features as one of our most popular and
                  iconic pieces. The dandy chair is perfect for any stylish living space with beech
                  legs and lambskin leather upholstery.
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-medium">Dimensions</h2>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Height</p>
                    <p className="text-muted-foreground">110cm</p>
                  </div>
                  <div>
                    <p className="font-medium">Width</p>
                    <p className="text-muted-foreground">75cm</p>
                  </div>
                  <div>
                    <p className="font-medium">Depth</p>
                    <p className="text-muted-foreground">50cm</p>
                  </div>
                </div>
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
                <Button className="ml-auto">Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

