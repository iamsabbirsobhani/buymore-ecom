import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      <ul className="flex">
        <li className="m-2">Sustainability</li>
        <li className="m-2">Curstomer Service</li>
        <li className="m-2">Newsletter</li>
      </ul>

      <div>
        <Image
          src="/images/buy-more-logo-2px.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </div>

      <ul className="flex">
        <li className="m-2">
          <a href="/cart">Sign In</a>
        </li>
        <li className="m-2">
          <a href="/login">Favourites</a>
        </li>
        <li className="m-2">
          <a href="/login">Shopping bag (0)</a>
        </li>
      </ul>
    </nav>
  );
}
