import Image from 'next/image';

export default function ProductCard({
  imgUrl,
  title,
  price,
}: {
  imgUrl: string;
  title: string;
  price: number;
}) {
  return (
    <div className="max-w-56">
      <Image src={imgUrl} alt={title} width={500} height={200} />
      <h1 className="mt-2">{title}</h1>
      <p className="font-bold mt-1">${price}</p>
    </div>
  );
}
