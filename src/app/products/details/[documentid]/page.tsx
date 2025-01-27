import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import ProductImageViewer from '@/components/ProductImageViewer';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
// import Typography from '@mui/joy/Typography';
import HomeIcon from '@mui/icons-material/Home';
import RelatedProducts from '@/components/RelatedProducts';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ documentid: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const productDocumentID = (await params).documentid;

  const product = await getProduct(productDocumentID);

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: product.data[0].productName + ' | Buy More',
    description: product.data[0].ProductDescriptions.map(
      (item: { type: string; children: [{ text: string }] }) =>
        item.children.map((child: { text: string }) => child.text).join(' '),
    ),
    openGraph: {
      title: product.data[0].productName + ' | Buy More',
      description: product.data[0].ProductDescriptions.map(
        (item: { type: string; children: [{ text: string }] }) =>
          item.children.map((child: { text: string }) => child.text).join(' '),
      ),
      images: [
        product.data[0].productImages[0].formats.small.url,
        ...previousImages,
      ],
    },
  };
}

const getProduct = async (documentId: string) => {
  const res = await fetch(
    `https://apistorehub.azurewebsites.net/api/products?filters[documentId][$eq]=${documentId}&populate[productImages]=true&populate[product_gender]=true&populate[product_type]=true`,
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
  //   product: product.data[0],
  // });
  // console.log({ inventories: inventories.data });
  // console.log({
  //   ProductImage: product.data[0].productImages[0].formats.small.url,
  // });
  return (
    <div className="max-w-7xl m-auto mt-[5vh]">
      <div className="mb-[2vh] mt-[2vh]">
        <Breadcrumbs aria-label="breadcrumbs">
          <Link color="primary" href="/">
            <div className="text-sm flex items-center text-gray-600">
              <HomeIcon fontSize="small" className="w-4 h-4" sx={{ mr: 0.5 }} />
              Buy More
            </div>
          </Link>
          <Link
            color="primary"
            href={
              product && product.data[0].product_gender.GenderName === 'Female'
                ? '/products/women'
                : '/products/men'
            }
          >
            <p className="text-sm text-gray-600">
              {product && product.data[0].product_gender.GenderName === 'Female'
                ? 'Women'
                : product.data[0].product_gender.GenderName === 'Male'
                ? 'Men'
                : product.data[0].product_gender.GenderName}
            </p>
          </Link>
          <Link color="primary" href="#">
            <p className="text-sm text-gray-600">
              {product.data[0].product_type.productTypeName}
            </p>
          </Link>
          {[product.data[0].productName].map((item: string) => (
            <Link key={item} color="neutral" href="#">
              <p className="break-words text-sm">
                {item.slice(0, 60)} {item.length > 60 ? '...' : ''}
              </p>
            </Link>
          ))}
        </Breadcrumbs>
      </div>
      <div className="grid grid-cols-2 content-center gap-10">
        <section className="">
          <div className="max-w-lg relative ml-auto mr-3">
            <ProductImageViewer product={product.data} />
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
                      <ul key={product.id}>
                        {product.ProductDescriptions.map(
                          (description: { children: { text: string }[] }) =>
                            description.children.map(
                              (child: { text: string }, index: number) => (
                                <li key={index}>{child.text}&nbsp;</li>
                              ),
                            ),
                        )}
                      </ul>
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
                            <span key={index}>{child.text}</span>
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
                      <ul key={product.id} className="list-disc">
                        {product.productSizeAndFit.map(
                          (sizeAndFit: { children: { text: string }[] }) =>
                            sizeAndFit.children.map(
                              (child: { text: string }, index: number) => (
                                <li className="list-disc" key={index}>
                                  {child.text}&nbsp;
                                </li>
                              ),
                            ),
                        )}
                      </ul>
                    ),
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Look After Me</AccordionSummary>
                <AccordionDetails>
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
      <section>
        <div className="h-[1px] w-full bg-gray-200 mt-[5vh]"></div>
      </section>
      <section>
        <div>
          <h1 className="uppercase text-lg mt-2 mb-[5vh] font-bold">
            You might also like
          </h1>
        </div>
        <div>
          <RelatedProducts
            gender={product.data[0].product_gender.GenderName}
            type={product.data[0].product_type.productTypeName}
            id={product.data[0].documentId}
          />
        </div>
      </section>
    </div>
  );
}
