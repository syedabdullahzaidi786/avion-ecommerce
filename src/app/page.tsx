'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Home = () => {
  const [email, setEmail] = useState('')  // State to manage email input
  const [formSubmitted, setFormSubmitted] = useState(false) // To track form submission
  const [emailError, setEmailError] = useState('') // To track email validation error

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic form validation logic
    if (email) {
      setFormSubmitted(true)  // Set formSubmitted to true when email is valid
      setEmailError('') // Clear error if email is valid
      setEmail('') // Reset email field after submission
    } else {
      setEmailError("Please enter a valid email.") // Show error message if email is not valid
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="grid md:grid-cols-2">
        <div className="bg-[#91A6A4] text-black p-12 md:p-24 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">
              The furniture brand for the future, with timeless designs
            </h1>
            <p className="text-gray-600 mb-8">
              A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
            <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white">
              View collection
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto bg-[#91A6A4]">
          <Image
            src="/home.svg"
            alt="Modern chair"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-center mb-16">What makes our brand different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
                title: "Next day as standard",
                description: "Order before 3pm and get your order the next day as standard"
              }, {
                title: "Made by true artisans",
                description: "Handmade crafted goods made with passion and craftsmanship"
              }, {
                title: "Unbeatable prices",
                description: "For our materials and quality you won&apos;t find better prices anywhere"
              }, {
                title: "Recycled packaging",
                description: "We use 100% recycled packaging to ensure our footprint is manageable"
              }
            ].map((feature, index) => (
              <div key={index}>
                <div className="w-10 h-10 mb-6">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-[#91A6A4]">
                    <rect width="40" height="40" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Ceramics Section with Different Images for Each Product */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl">New ceramics</h2>
            <Link href="/collection" className="text-gray-600 hover:text-gray-900">
              View collection
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="relative aspect-square mb-4">
                <Image
                  src="/home.svg" // Replace with your actual image path
                  alt="The Dandy chair"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg mb-1">The Dandy chair</h3>
              <p className="text-gray-600">£250</p>
            </div>
            <div>
              <div className="relative aspect-square mb-4">
                <Image
                  src="/images/rustic-vase-set.jpg" // Replace with your actual image path
                  alt="Rustic Vase Set"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg mb-1">Rustic Vase Set</h3>
              <p className="text-gray-600">£155</p>
            </div>
            <div>
              <div className="relative aspect-square mb-4">
                <Image
                  src="/images/silky-vase.jpg" // Replace with your actual image path
                  alt="The Silky Vase"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg mb-1">The Silky Vase</h3>
              <p className="text-gray-600">£125</p>
            </div>
            <div>
              <div className="relative aspect-square mb-4">
                <Image
                  src="/images/silky-vase-2.jpg" // Replace with your actual image path
                  alt="The Silky Vase"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg mb-1">The Silky Vase</h3>
              <p className="text-gray-600">£125</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl">Our popular products</h2>
            <Link href="/collection" className="text-gray-600 hover:text-gray-900">
              View collection
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
                name: "The Poplar suede sofa",
                price: "£980"
              }, {
                name: "The Dandy chair",
                price: "£250"
              }, {
                name: "The Dandy chair",
                price: "£250"
              }
            ].map((product, index) => (
              <div key={index}>
                <div className="relative aspect-[4/3] mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-[#91A6A4] hover:bg-[#91A6A4]/90 text-white py-2 px-4 rounded-md">
              Sign up
            </Button>
          </form>
          {formSubmitted && (
            <p className="mt-4 text-gray-600">
              You&apos;ve successfully signed up with <strong>{email}</strong>
            </p>
          )}
          {emailError && (
            <p className="mt-4 text-red-600">{emailError}</p>
          )}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl">From a studio in London to a global brand with over 400 outlets</h2>
              <p className="text-gray-600">
                When we started Avion, our goal was to create the most comfortable, beautiful and functional furniture brand the world has ever seen. Since then, we’ve expanded globally and brought timeless designs to hundreds of cities.
              </p>
              <Link href="/about-us" className="text-[#91A6A4] hover:underline">Read more</Link>
            </div>
            <div>
              <Image
                src="/images/our-story.jpg"
                alt="Our story"
                width={500}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
