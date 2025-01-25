import Image from 'next/image';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

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
  // console.log({
  //   product: product.data[0].productLookAfterMe[0].children[0].text,
  // });
  // console.log({ inventories: inventories.data });
  return (
    <div className="max-w-7xl m-auto mt-[5vh]">
      <div className="grid grid-cols-2 content-center gap-10">
        <section className="">
          <div className="max-w-sm relative ml-auto mr-3">
            <Image
              src={product.data[0].productImages[1]?.formats?.small?.url || ''}
              alt={product.data[0].productName}
              width={600}
              height={500}
            />
          </div>
        </section>
        <section className="max-w-80">
          <h1 className="text-gray-700 font-light text-base">
            {product.data[0].productName}
          </h1>
          <p className="mt-2 font-bold text-base text-gray-600">
            $&nbsp;{product.data[0].productPrice}.00
          </p>

          <p className="font-bold text-sm mt-2">Size:</p>
          <Select
            color="neutral"
            disabled={false}
            placeholder="Select size"
            size="md"
            variant="outlined"
            className=" p-2 px-4 mt-2"
          >
            {inventories.data.map(
              (inventory: {
                id: string;
                size: { sizeName: string; id: string };
                quantity: number;
              }) => (
                <Option key={inventory.id} value={inventory.size.sizeName}>
                  {inventory.size.sizeName} &nbsp; {inventory.quantity} in stock
                </Option>
              ),
            )}
          </Select>
          <div className="mt-5 flex items-center justify-between">
            <button className="uppercase bg-green-700 p-2 text-gray-50 px-3 w-60">
              Add to bag
            </button>
            <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mr-3 group cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 group-hover:text-green-700 group-hover:fill-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5">
            <AccordionGroup sx={{ maxWidth: 400 }}>
              <Accordion>
                <AccordionSummary>Product Details</AccordionSummary>
                <AccordionDetails>
                  {product.data.map(
                    (product: {
                      id: string;
                      documentId: string;
                      productName: string;
                      productPrice: number;
                      ProductDescriptions: { children: { text: string }[] }[];
                    }) => (
                      <p key={product.id}>
                        {product.ProductDescriptions.map(
                          (description: { children: { text: string }[] }) =>
                            description.children.map(
                              (child: { text: string }, index: number) => (
                                <span key={index}>{child.text}&nbsp;</span>
                              ),
                            ),
                        )}
                      </p>
                    ),
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Brand</AccordionSummary>
                <AccordionDetails>
                  {product.data[0].productBrand.map(
                    (
                      brand: { id: string; children: { text: string }[] },
                      index: number,
                    ) => (
                      <p key={index}>
                        {brand.children.map(
                          (child: { text: string }, index: number) => (
                            <span key={index}>{child.text}&nbsp;</span>
                          ),
                        )}
                      </p>
                    ),
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Size & Fit</AccordionSummary>
                <AccordionDetails>
                  {product.data[0].productSizeAndFit[0].children[0].text}
                  {product.data.map(
                    (product: {
                      id: string;
                      documentId: string;
                      productName: string;
                      productPrice: number;
                      productSizeAndFit: {
                        children: { text: string }[];
                      }[];
                    }) => (
                      <p key={product.id}>
                        {product.productSizeAndFit.map(
                          (sizeAndFit: { children: { text: string }[] }) =>
                            sizeAndFit.children.map(
                              (child: { text: string }, index: number) => (
                                <span key={index}>{child.text}&nbsp;</span>
                              ),
                            ),
                        )}
                      </p>
                    ),
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Look After Me</AccordionSummary>
                <AccordionDetails>
                  {product.data[0].productLookAfterMe[0].children[0].text}
                  {product.data.map(
                    (product: {
                      id: string;
                      documentId: string;
                      productName: string;
                      productPrice: number;
                      productLookAfterMe: {
                        children: { text: string }[];
                      }[];
                    }) => (
                      <p key={product.id}>
                        {product.productLookAfterMe.map(
                          (lookAfterMe: { children: { text: string }[] }) =>
                            lookAfterMe.children.map(
                              (child: { text: string }, index: number) => (
                                <span key={index}>{child.text}&nbsp;</span>
                              ),
                            ),
                        )}
                      </p>
                    ),
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>About Me</AccordionSummary>
                <AccordionDetails>
                  This web application is built with Next.js, Tailwind CSS, and
                  built with love by Sabbir Sobhani.
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </div>
        </section>
      </div>
      {/* <p>{product.data[0].ProductDescriptions}</p> */}
    </div>
  );
}
