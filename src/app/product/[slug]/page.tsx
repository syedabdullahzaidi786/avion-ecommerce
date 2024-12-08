'use client'; // Add this directive at the top of the file

// Define the Product type
interface Product {
  name: string;
  price: number;
  description: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  imageUrl: string;
}



import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { MinusIcon, PlusIcon } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ProductPage() {
  const { slug } = useParams(); // Using useParams to get the slug

  // State to store the fetched product data with the correct type
  const [product, setProduct] = useState<Product | null>(null); // Explicitly type the state as Product | null

  // Fetch product data based on slug when the component mounts
  useEffect(() => {
    if (slug) {
      fetch(`/api/products/${slug}`) // API call to fetch product data by slug
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product data:', error));
    }
  }, [slug]);

  // If product is not loaded yet, display loading state
  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square">
              {/* Dynamic product image */}
              <Image
                src={product.imageUrl} // URL from product data
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                {/* Product name and price */}
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-2xl font-bold">£{product.price}</p>
              </div>
              <div className="space-y-4">
                {/* Product description */}
                <h2 className="font-medium">Description</h2>
                <p className="text-muted-foreground">{product.description}</p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {/* Product dimensions */}
                <h2 className="font-medium">Dimensions</h2>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Height</p>
                    <p className="text-muted-foreground">{product.dimensions.height}</p>
                  </div>
                  <div>
                    <p className="font-medium">Width</p>
                    <p className="text-muted-foreground">{product.dimensions.width}</p>
                  </div>
                  <div>
                    <p className="font-medium">Depth</p>
                    <p className="text-muted-foreground">{product.dimensions.depth}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Quantity controls */}
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
  );
}
