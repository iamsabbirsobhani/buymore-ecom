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
    <div className="max-w-7xl m-auto">
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
          <h1>{product.data[0].productName}</h1>
          <p>${product.data[0].productPrice}</p>
          <p>Size</p>
          <select name="" id="">
            {inventories.data.map(
              (inventory: { id: string; size: { sizeName: string } }) => (
                <option key={inventory.id} value={inventory.size.sizeName}>
                  {inventory.size.sizeName}
                </option>
              ),
            )}
          </select>
          <div>
            <button className="uppercase">Add to bag</button>
          </div>
        </section>
      </div>
      {/* <p>{product.data[0].ProductDescriptions}</p> */}
    </div>
  );
}
