type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductDetails({ params }: Props) {
  const productID = (await params).id;
  // console.log({ gender });
  return <div>Product ID: {productID}</div>;
}
