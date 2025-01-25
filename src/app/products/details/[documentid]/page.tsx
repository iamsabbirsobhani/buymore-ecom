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
  // console.log({ product: product.data });
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
        <section>
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
            className="w-60 p-2 px-4 mt-2"
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
          <div className="mt-5">
            <button className="uppercase bg-green-700 p-2 text-gray-50 px-3 w-60">
              Add to bag
            </button>
          </div>

          <div className="mt-5">
            <AccordionGroup sx={{ maxWidth: 400 }}>
              <Accordion>
                <AccordionSummary>Product Details</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Brand</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Size & Fit</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Look After Me</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>About Me</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
