import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#E4E4E4] p-10 mt-[5vh] h-[70vh]">
      <div className=" flex gap-20 justify-center ">
        <section className="flex gap-20">
          <div>
            <h1 className="font-bold text-sm">Shop</h1>
            <ul className="text-xs mt-1">
              <li className="hover:underline cursor-pointer mt-2">Ladies</li>
              <li className="hover:underline cursor-pointer mt-2">Men</li>
              <li className="hover:underline cursor-pointer mt-2">Baby</li>
              <li className="hover:underline cursor-pointer mt-2">Kids</li>
              <li className="hover:underline cursor-pointer mt-2">Home</li>
              <li className="hover:underline cursor-pointer mt-2">Magazine</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-sm">Corporate Info</h1>
            <ul className="text-xs mt-1">
              <li className="hover:underline cursor-pointer mt-2">
                Career at Buy More
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                About Buy More group
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Sustainability Buy More Group
              </li>
              <li className="hover:underline cursor-pointer mt-2">Press</li>
              <li className="hover:underline cursor-pointer mt-2">
                Investor relations
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Corporate governance
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-sm">Help</h1>
            <ul className="text-xs mt-1">
              <li className="hover:underline cursor-pointer mt-2">
                Customer Service
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                My Buy More
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Find a store
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Legal & privacy
              </li>
              <li className="hover:underline cursor-pointer mt-2">Contact</li>
              <li className="hover:underline cursor-pointer mt-2">
                Secure shopping
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Cookie Notice
              </li>
              <li className="hover:underline cursor-pointer mt-2">
                Cookie Settings
              </li>
            </ul>
          </div>
        </section>
        <section className="w-[30vw]">
          <h1 className="text-sm mt-[5vh]">
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </h1>
          <Link
            href="/read-more"
            className="underline underline-offset-2 flex items-center gap-5 mt-3"
          >
            <p>Read more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </section>
      </div>
      <div className="flex items-center flex-col mt-[5vh]">
        <p className="text-xs">
          The content of this site is copyright-protected and is the property of
          Buy More Hennes & Mauritz AB.
        </p>
        <Image
          src="/images/buy-more-logo-2px.png"
          alt="Buy More Logo"
          width={100}
          height={100}
          className="cursor-pointer mt-5"
        />
      </div>
    </footer>
  );
}
