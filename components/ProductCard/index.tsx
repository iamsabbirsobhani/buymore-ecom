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
      <Image src={imgUrl} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <p className="font-bold">${price}</p>
    </div>
  );
}
