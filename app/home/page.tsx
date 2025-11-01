'use client';

import ItemCard from "@/components/item-cart";
import { Item } from "@/components/item-cart";





export default function Home() {

  const sampleProduct: Item = {
    id: 1,
    title: 'Organic Cotton T-Shirt',
    slug: 'organic-cotton-tshirt',
    images: ['/products/tshirt-1.jpg'],
    price: 24.99,
    compareAtPrice: 39.99,
    rating: 4.2,
    reviewsCount: 48,
    badge: 'Sale',
    inStock: true,
    shortDescription: 'Soft breathable cotton tee with modern fit.',
  };

  // Create as many products as you want by cloning and changing id/fields
  const PRODUCTS: Item[] = Array.from({ length: 24 }).map((_, i) => ({
    ...sampleProduct,
    id: i + 1,
    slug: `organic-cotton-tshirt-${i + 1}`,
    title: `Organic Cotton T-Shirt ${i + 1}`,
    images: [`/products/tshirt-${(i % 6) + 1}.jpg`], // rotate example images
    price: 19.99 + (i % 5) * 5,
    compareAtPrice: i % 3 === 0 ? 39.99 : undefined,
    badge: i % 7 === 0 ? 'New' : i % 5 === 0 ? 'Sale' : undefined,
    inStock: i % 8 === 0 ? false : true,
    reviewsCount: Math.floor(Math.random() * 200),
  }));
  return (
    // <div className="min-h-screen bg-background">
    <div className="flex flex-col min-h-screen">
      {/* <Header logoSrc="/logo.png" siteName="ShopEase" cartCount={5} /> */}
      <main className="flex-grow bg-background">
        {/* your home content */}
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-semibold mb-4">All Items</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {PRODUCTS.map((p) => (
              <ItemCard
                key={p.id}
                product={p}
                onAddToCart={(prod) => {
                  console.log('Add to cart', prod.id);
                }}
                onQuickView={(prod) => {
                  console.log('Quick view', prod.id);
                }}
              />
            ))}
          </section>
        </div>
      </main>
    </div>

  );
}