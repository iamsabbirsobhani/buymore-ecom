import ProductContainer from '@/components/ProductContainer';
type Props = {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Products({ params }: Props) {
  const gender = (await params).gender;
  // console.log({ gender });
  return (
    <div>
      <h1 className="text-center m-2 text-sm text-gray-700">Men Products</h1>
      <ProductContainer
        gender={
          gender === 'men' ? 'Male' : gender === 'women' ? 'Female' : 'Unisex'
        }
      />
    </div>
  );
}
