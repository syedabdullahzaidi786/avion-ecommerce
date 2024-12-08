import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-normal leading-tight">
                A brand built on the love of craftsmanship, quality and outstanding customer service&apos;s dedication
              </h1>
              <Button asChild className="bg-[#2A254B] hover:bg-[#2A254B]/90">
                <Link href="/products">View our products</Link>
              </Button>
            </div>
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/placeholder.svg"
                alt="Craftsmanship Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2A254B] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal">It started with a small idea&apos;s evolution</h2>
              <p className="text-gray-300">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#2A254B]">
                View collection
              </Button>
            </div>
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/placeholder.svg"
                alt="Yellow chair in modern interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9F9F9]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/placeholder.svg"
                alt="Modern sofa interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-normal">
                Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                </p>
                <p className="text-gray-600">
                  Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                </p>
              </div>
              <Button variant="outline">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-normal text-center mb-12">What makes our brand different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
                title: "Next day as standard",
                description: "Order before 3pm and get your order the next day as standard"
              },
              {
                title: "Made by true artisans",
                description: "Handmade crafted goods made with real passion and craftsmanship"
              },
              {
                title: "Unbeatable prices",
                description: "For our materials and quality you won't find better prices anywhere"
              },
              {
                title: "Recycled packaging",
                description: "We use 100% recycled packaging to ensure our footprint is more manageable"
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-10 h-10 bg-[#2A254B] flex items-center justify-center">
                  <span className="text-white">M</span>
                </div>
                <h3 className="text-xl font-normal">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-normal">Join the club and get the benefits</h2>
            <p className="text-gray-600">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <Input type="email" placeholder="your@email.com" className="flex-1" />
              <Button type="submit" className="bg-[#2A254B] hover:bg-[#2A254B]/90">
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
