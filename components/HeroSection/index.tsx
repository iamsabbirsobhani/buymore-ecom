import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <section className="bg-[#c9002e] antialiased h-[70vh] w-[70vw] flex justify-center items-center m-auto mt-[5vh] flex-col p-5">
        <div>
          <h1 className="font-extrabold text-5xl text-gray-50 text-center">
            Discover More. Save More. Buy More.
          </h1>
          <p className=" text-2xl mt-5 text-gray-50 text-center">
            Don&apos;t miss out on exclusive offers.
          </p>
        </div>

        <div className="relative top-[15vh]">
          <ul className="flex justify-center items-center">
            <li className="m-1">
              <Link href="/products/women">
                <button className="bg-gray-50 p-2 hover:bg-gray-300">
                  Women
                </button>
              </Link>
            </li>
            <li className="m-1">
              <Link href="/products/men">
                <button className="bg-gray-50 p-2 hover:bg-gray-300">
                  Men
                </button>
              </Link>
            </li>
            <li className="m-1">
              <button className="bg-gray-50 p-2 hover:bg-gray-300">Kids</button>
            </li>
            <li className="m-1">
              <button className="bg-gray-50 p-2 hover:bg-gray-300">Home</button>
            </li>
          </ul>

          <p className="text-center relative top-2 text-xs">
            *T&C Apply. Offers may vary in-store and online.
          </p>
        </div>
      </section>

      <section className=" mt-[10vh] relative">
        <div>
          <div className="max-w-[70vw] m-auto relative ">
            <div className="absolute bg-gradient-to-t from-gray-700/30 to-gray-50/0 top-0 bottom-0 left-0 right-0"></div>
            <Image
              src="/hero/1.png"
              alt="Hero Image"
              width={1920}
              height={1080}
            />
            <div className="absolute left-10 top-0 bottom-0 flex justify-center flex-col ">
              <h1 className="text-4xl tracking-wide font-bold text-gray-50">
                Denim & animal print
              </h1>
              <Link href="/products/women">
                <button className="bg-gray-50 w-fit mt-3 p-2 hover:bg-gray-300">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-[10vh] relative">
        <div>
          <div className="max-w-[70vw] m-auto relative ">
            <div className="absolute bg-gradient-to-t from-gray-700/30 to-gray-50/0 top-0 bottom-0 left-0 right-0"></div>
            <Image
              src="/hero/2.png"
              alt="Hero Image"
              width={1920}
              height={1080}
            />
            <div className="absolute left-10  bottom-10 flex justify-center flex-col ">
              <h1 className="text-4xl tracking-wide font-bold text-gray-50">
                Startorial update
              </h1>
              <p className="text-gray-50 text-xl mt-3 mb-3">
                Relaxed minimalism for a wider silhouette.
              </p>
              <Link href="/products/men">
                <button className="bg-gray-50 w-fit mt-3 p-2 hover:bg-gray-300">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
