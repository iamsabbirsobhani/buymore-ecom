'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import the modules you need:
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';
import SwiperCore from 'swiper';

// Import Swiper styles:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import Image from 'next/image';

// Define the product interface:
interface Product {
  productImages: {
    id: string;
    formats: {
      small: {
        url: string;
      };
    };
  }[];
  productName: string;
}

// Define the props interface for your component:
interface ProductImageViewerProps {
  // Example shape: product = [{ productImages: [...], productName: ... }]
  product: Product[];
}

export default function ProductImageViewer({
  product,
}: ProductImageViewerProps) {
  // Store the Swiper instance in state to use it outside <Swiper> (e.g., in Prev/Next buttons):
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  // Optional: Destructure the product array for simpler usage:
  const currentProduct = product?.[0];
  const images = currentProduct?.productImages || [];

  return (
    <div className="relative">
      <Swiper
        // Add any modules you need:
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        zoom
        // Save the Swiper instance once it's initialized:
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setSwiperInstance(swiper)}
      >
        {images.map(({ id, formats }) => (
          <SwiperSlide key={id}>
            <Image
              src={formats.small.url}
              alt={currentProduct?.productName || 'Product Image'}
              width={600}
              height={500}
              // If you'd like to prioritize loading the first image (to reduce flicker):
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev/Next buttons, positioned absolutely in the middle left/right */}
      {swiperInstance && (
        <>
          <button
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-10
 text-green-500
              p-2
              px-3
              rounded
              hover:text-green-800
            "
            onClick={() => swiperInstance.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-10

              text-green-500
              p-2
              px-3
              rounded
              hover:text-green-800
            "
            onClick={() => swiperInstance.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
