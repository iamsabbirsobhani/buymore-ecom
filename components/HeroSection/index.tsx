export default function HeroSection() {
  return (
    <div className="hero-section">
      <section className="bg-[#c9002e] antialiased h-[70vh] w-[70vw] flex justify-center items-center m-auto mt-[5vh] flex-col">
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
              <button className="bg-gray-50 p-2 hover:bg-gray-300">
                Women
              </button>
            </li>
            <li className="m-1">
              <button className="bg-gray-50 p-2 hover:bg-gray-300">Men</button>
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
    </div>
  );
}
