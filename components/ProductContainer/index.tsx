import { ProductImage } from '@/types';
import ProductCard from '../ProductCard';
// import Link from 'next/link';
import MuiLink from '@mui/joy/Link';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';
import HomeIcon from '@mui/icons-material/Home';

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
    <div className="max-w-7xl m-auto mt-[3vh]">
      <div className="mb-[2vh] mt-[2vh]">
        <Breadcrumbs aria-label="breadcrumbs">
          <MuiLink color="primary" href="/">
            <div className="text-sm flex items-center text-gray-600">
              <HomeIcon className="w-4" sx={{ mr: 0.5 }} />
              Buy More
            </div>
          </MuiLink>
          {[gender === 'Female' ? 'Women' : 'Men'].map((item: string) => (
            <MuiLink key={item} color="neutral" href="#">
              <p className="text-sm text-gray-600">{item}</p>
            </MuiLink>
          ))}
          <Typography>
            <span className="text-sm font-semibold text-red-500">Buy More</span>{' '}
            Products
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="grid grid-cols-5 gap-5 text-gray-600">
        {products.data.map(
          (product: {
            id: string;
            documentId: string;
            productName: string;
            productPrice: number;
            productImages: ProductImage[];
          }) => (
            <MuiLink
              href={`/products/details/${product.documentId}`}
              key={product.id}
            >
              <ProductCard
                key={product.id}
                imgUrl={product.productImages[1]?.formats?.small?.url || ''}
                title={product.productName}
                price={product.productPrice}
              />
            </MuiLink>
          ),
        )}
      </div>
    </div>
  );
}
