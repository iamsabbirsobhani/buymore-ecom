import { ProductImage } from '@/types';
import ProductCard from '../ProductCard';
import Link from 'next/link';

const getProducts = async (gender: string) => {
  try {
    const response = await fetch(
      `https://apistorehub.azurewebsites.net/api/products?populate=productImages&filters[product_gender][GenderName][$eq]=${gender}`,
      { cache: 'no-store' }, // Use `no-store` for dynamic data
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: [] }; // Fallback to avoid crashes
  }
};

export default async function ProductContainer({ gender }: { gender: string }) {
  const products = await getProducts(gender);
  // console.log({ products: products.data });
  return (
    <div className="max-w-7xl m-auto mt-[5vh]">
      <div className="grid grid-cols-5 gap-5">
        {products.data.map(
          (product: {
            id: string;
            documentId: string;
            productName: string;
            productPrice: number;
            productImages: ProductImage[];
          }) => (
            <Link
              href={`/products/details/${product.documentId}`}
              key={product.id}
            >
              <ProductCard
                key={product.id}
                imgUrl={product.productImages[1]?.formats?.small?.url || ''}
                title={product.productName}
                price={product.productPrice}
              />
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
