'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type Item = {
  id: string | number;
  title: string;
  slug?: string;
  images?: string[];
  price: number;
  compareAtPrice?: number | null;
  rating?: number; // 0-5
  reviewsCount?: number;
  badge?: string; // e.g., "New", "Sale", "Limited"
  inStock?: boolean;
  shortDescription?: string;
};

type ItemCardProps = {
  product: Item;
  showActions?: boolean;
  onAddToCart?: (product: Item) => void;
  onQuickView?: (product: Item) => void;
  imagePriority?: boolean;
};

export default function ItemCard({
  product,
  showActions = true,
  onAddToCart,
  onQuickView,
  imagePriority = false,
}: ItemCardProps) {
  const {
    title,
    slug,
    images = ['/placeholder.png'],
    price,
    compareAtPrice,
    rating = 0,
    reviewsCount = 0,
    badge,
    inStock = true,
    shortDescription = '',
  } = product;

  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(price);

  const formattedCompare =
    typeof compareAtPrice === 'number'
      ? new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(compareAtPrice)
      : null;

  return (
    <article className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 overflow-hidden">
      <Link
        href={slug ? `/product/${slug}` : '#'}
        className="block relative aspect-[4/3] bg-gray-50 overflow-hidden"
        aria-label={title}
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          priority={imagePriority}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
        {!inStock && (
          <span className="absolute top-3 right-3 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded">
            Out of stock
          </span>
        )}
      </Link>

      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
            <Link href={slug ? `/product/${slug}` : '#'}>{title}</Link>
          </h3>

          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900">{formattedPrice}</div>
            {formattedCompare && (
              <div className="text-xs text-gray-500 line-through">{formattedCompare}</div>
            )}
          </div>
        </div>

        {shortDescription && (
          <p className="text-xs text-gray-600 line-clamp-2">{shortDescription}</p>
        )}

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(rating) ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.382 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.619 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviewsCount})</span>
          </div>

          {showActions && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onQuickView?.(product)}
                className="hidden sm:inline-flex items-center px-2 py-1 text-xs border border-gray-200 rounded-md hover:bg-gray-50"
                aria-label="Quick view"
              >
                Quick view
              </button>

              <button
                type="button"
                onClick={() => onAddToCart?.(product)}
                disabled={!inStock}
                className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-md transition
                  ${inStock ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                aria-disabled={!inStock}
                aria-label="Add to cart"
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
