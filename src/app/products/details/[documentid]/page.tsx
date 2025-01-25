import Image from 'next/image';

type Props = {
  params: Promise<{ documentid: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getProduct = async (documentId: string) => {
  const res = await fetch(
    `https://apistorehub.azurewebsites.net/api/products?filters[documentId][$eq]=${documentId}&populate=productImages`,
  );
  const product = await res.json();
  return product;
};
const getInventories = async (documentId: string) => {
  const res = await fetch(
    `https://apistorehub.azurewebsites.net/api/inventories?filters[product][documentId][$eq]=${documentId}&populate=*`,
  );
  const product = await res.json();
  return product;
};

export default async function ProductDetails({ params }: Props) {
  const productDocumentID = (await params).documentid;
  const product = await getProduct(productDocumentID);
  const inventories = await getInventories(productDocumentID);
  // console.log({ product: product.data });
  // console.log({ inventories: inventories.data });
  return (
    <div className="max-w-7xl m-auto mt-[5vh]">
      <div className="grid grid-cols-2 content-center">
        <section>
          <Image
            src={product.data[0].productImages[1]?.formats?.small?.url || ''}
            alt={product.data[0].productName}
            width={600}
            height={500}
          />
        </section>
        <section>
          <h1 className="text-gray-700 font-light text-base">
            {product.data[0].productName}
          </h1>
          <p className="mt-2 font-bold text-base text-gray-600">
            $&nbsp;{product.data[0].productPrice}.00
          </p>
          <div className="lowercase font-light text-lg flex items-center mt-3">
            <h1 className="text-sm font-bold mr-2 uppercase">COLOUR:</h1>
            {Array.from(
              new Set(
                inventories.data.map(
                  (inventory: {
                    id: string;
                    product_color: { colorName: string; id: string };
                  }) => inventory.product_color.colorName,
                ),
              ) as Set<string>,
            ).map((uniqueColor: string) => (
              <div key={uniqueColor} className="ml-2">
                <div
                  className={`bg-[${uniqueColor.toLowerCase()}] border w-10 h-10`}
                  title={uniqueColor}
                ></div>
              </div>
            ))}
          </div>
          <p className="font-bold text-sm mt-2">Size:</p>
          <select name="" id="" className="border w-60 p-2 px-4 mt-2">
            {inventories.data.map(
              (inventory: {
                id: string;
                size: { sizeName: string; id: string };
                quantity: number;
              }) => (
                <option key={inventory.id} value={inventory.size.sizeName}>
                  {inventory.size.sizeName} &nbsp; {inventory.quantity} in stock
                </option>
              ),
            )}
          </select>
          <div className="mt-3">
            <button className="uppercase bg-green-700 p-2 text-gray-50 px-3 w-60">
              Add to bag
            </button>
          </div>
        </section>
      </div>
      {/* <p>{product.data[0].ProductDescriptions}</p> */}
    </div>
  );
}
