import { ProductImage } from '@/types';
import ProductCard from '../ProductCard';
import MuiLink from '@mui/joy/Link';

const getProduct = async (type: string, gender: string) => {
  const res = await fetch(
    `https://apistorehub.azurewebsites.net/api/products?sort=productName&filters[product_type][productTypeName][$eq]=${type}&filters[product_gender][GenderName][$eqi]=${gender}&populate[productImages]=true&populate[product_gender]=true&populate[product_type]=true`,
  );
  const product = await res.json();
  return product;
};
export default async function RelatedProducts({
  type,
  gender,
  id,
}: {
  type: string;
  gender: string;
  id: string;
}) {
  const products = await getProduct(type, gender);
  //   console.log(products.data[0]);
  return (
    <div className="grid grid-cols-6 gap-5 text-gray-600">
      {products && products.data.length > 0 ? (
        products.data.map(
          (product: {
            id: string;
            documentId: string;
            productName: string;
            productPrice: number;
            productImages: ProductImage[];
          }) =>
            product.documentId !== id ? (
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
            ) : null,
        )
      ) : (
        <div>
          <h1 className="text-center text-gray-600 mt-3 mb-3">
            No products found
          </h1>
        </div>
      )}
    </div>
  );
}
