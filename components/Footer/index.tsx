import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#E4E4E4] p-10 mt-[5vh] h-fit">
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
            className="underline hover:text-gray-500 duration-200 transition-colors underline-offset-2 flex items-center gap-5 mt-3"
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
          Buy More Sabbir Sobhani.
        </p>
        <Image
          src="/images/buy-more-logo-2px.png"
          alt="Buy More Logo"
          width={100}
          height={100}
          className="cursor-pointer mt-[5vh]"
        />
      </div>
      <div className="flex justify-center items-center mt-[0.1vh]">
        <p className="m-3">Made with &#10084;&#65039; By</p>
        <Link
          target="_blank"
          href="https://github.com/iamsabbirsobhani"
          title="Sabbir Sobhani Github"
        >
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 231.78 37.76"
            width="200"
            height="100"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="m22.56,9.64c1.3-2.43.64-5.37-1.25-7.31C19.24.22,16.05-.25,13.23.11c-3.07.38-6.01,1.63-8.46,3.51C2.56,5.3.12,7.76,0,10.73s2.27,4.76,4.88,5.25c3.38.64,6.7-.63,9.99.78,2.31.99,6.88,4.56,4.12,7.26-2.29,2.25-6.04,3.97-9.24,4.19-1.81.12-4.01-.49-4.57-2.44-.43-1.49.69-2.54,2.06-2.8,3.61-.68,5.56,3.33,6.87,5.98.64,1.3,2.58.16,1.94-1.14-1.31-2.65-2.91-5.67-5.85-6.77-2.23-.83-5.21-.35-6.63,1.7-1.71,2.46-.2,5.7,2.25,6.98,3.1,1.62,6.98.41,9.93-.96,2.6-1.2,6.47-3.3,6.35-6.63-.11-3.09-2.96-5.73-5.53-7.04-1.35-.69-2.79-1.13-4.3-1.3-1.98-.22-3.95.2-5.93.1-1.42-.07-3.24-.53-3.89-1.96-.78-1.7.62-3.62,1.73-4.8,2.61-2.78,6.4-4.73,10.25-4.89,1.86-.08,3.93.28,5.28,1.68,1.16,1.2,1.72,3.05.9,4.58-.68,1.28,1.26,2.42,1.94,1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m36.84,19.71c-1.22-2.6-4.52-3.16-6.98-2.15-1.45.6-2.67,1.62-3.79,2.69s-2.38,2.19-2.52,3.79c-.26,3.04,3.01,4.97,5.71,4.21,3.39-.96,4.72-4.42,5.67-7.45.4-1.29-1.36-1.85-2.06-.87-1.52,2.15-1.13,5.37.99,6.99s5.64,1.16,7.24-1.14c.87-1.25,1.13-2.75,1.34-4.23.3-2.05.57-4.11.81-6.16.48-4.08.75-8.17.49-12.27-.09-1.43-2.31-1.46-2.25,0,.3,6.86.61,13.73.91,20.59.05,1.04,1.57,1.63,2.1.57.81-1.63,2.12-2.92,3.83-3.58,1.18-.45,3.43-.88,4.33.36,1.2,1.66-2.26,2.87-3.33,3.2-2,.61-4.06.76-6.14.56-1.44-.14-1.43,2.11,0,2.25,3.03.3,6.21-.15,8.96-1.5,2.05-1.01,3.95-3.38,2.46-5.65-1.3-1.98-4.09-2.16-6.18-1.61-2.55.68-4.71,2.49-5.88,4.83l2.1.57c-.3-6.86-.61-13.73-.91-20.59h-2.25c.38,5.98-.38,11.93-1.22,17.84-.3,2.08-.83,4.86-3.53,4.71-2.37-.13-3.19-2.82-1.93-4.6l-2.06-.87c-.63,2.01-1.32,4.43-3.29,5.53-.84.47-1.87.68-2.74.13-.81-.51-1.21-1.45-.67-2.32,1.38-2.24,6.96-6.7,8.83-2.71.61,1.31,2.55.17,1.94-1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m60.71,7.27l-.58-1.32c-.5-1.14-2-.4-2.1.57-.62,5.98-1.25,11.97-1.87,17.95-.09.85,1.02,1.4,1.69.97,1.47-.94,2.37-2.37,3.47-3.68.84-1.01,2.38-2.3,3.38-.67,1.09,1.78-.42,3.49-1.99,4.23-2.27,1.07-4.99.81-7.43,1.15l1.27.52-.45.67c1.4.36,2-1.81.6-2.17-1.62-.42-2.74,1.2-2.09,2.63.23.49.81.58,1.27.52,3.13-.43,6.47-.1,9.14-2.09,2.01-1.49,2.94-4.05,1.74-6.37-1.05-2.03-3.53-2.73-5.46-1.47s-2.69,3.59-4.59,4.79l1.69.97c.62-5.98,1.25-11.97,1.87-17.95l-2.1.57.58,1.32c.58,1.32,2.52.18,1.94-1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m71.27,20.32l.49,6.72c.04.59.49,1.15,1.12,1.12.57-.03,1.17-.5,1.12-1.12l-.49-6.72c-.04-.59-.49-1.15-1.12-1.12-.57.03-1.17.5-1.12,1.12h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m73.8,12.01c-.53-1.12-1.38-2.05-2.4-2.76-.23-.16-.61-.18-.87-.11s-.54.27-.67.52c-.14.26-.21.58-.11.87s.27.5.52.67c.08.06.16.12.25.18l-.23-.18c.4.31.76.67,1.07,1.07l-.18-.23c.26.34.49.71.67,1.1.11.24.42.45.67.52.27.07.63.04.87-.11s.45-.39.52-.67l.04-.3c0-.2-.05-.39-.15-.57h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m76.79,26.65c2.24.33,4.51-.45,6.05-2.13,1.44-1.58,2.62-4.59.88-6.38-1.51-1.56-4.05-.92-5.75-.09-1.03.5-2.13,1.44-2.22,2.66-.1,1.32,1.01,2.18,2.23,2.24.71.03,1.45-.15,2.15-.26.81-.13,1.62-.26,2.44-.4,1.62-.28,3.24-.57,4.86-.88l-1.09-1.88c-1.58,1.68-3.11,4.47-1.6,6.68,1.12,1.64,3.76,2.47,5.23.79.95-1.08-.63-2.68-1.59-1.59-.28.32-.48.33-.89.2-.37-.12-.77-.4-.96-.77-.63-1.22.56-2.84,1.39-3.73s0-2.09-1.09-1.88c-2.04.39-4.08.75-6.13,1.09-.9.15-1.8.27-2.71.37-.17.02-.16-.11-.04.03-.03-.04.03.13.06.13,0,0,.18-.22.2-.25.14-.15.3-.27.48-.38.55-.34,1.17-.56,1.8-.7.5-.11,1.12-.15,1.47.05.95.54.03,2.48-.53,3.16-.94,1.16-2.51,1.97-4.03,1.75-.6-.09-1.21.15-1.38.79-.15.53.18,1.29.79,1.38h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m126.73,6.08c-.61-3.7-5.07-4.61-8.18-4.08-3.85.65-7.76,3.16-9.59,6.67-.84,1.61-1.19,3.71.16,5.16,1.43,1.54,3.99,1.6,5.93,1.76,2.28.19,4.55-.1,6.82.04.88.05,1.91.21,2.55.88.88.91.74,2.34.15,3.35-2.23,3.83-8.82,4.36-11.66,1.08v1.59c2.46-2.89,6.94-2.17,10.3-2.07,4.46.13,8.99-.02,13.23-1.54.59-.21.93-.75.79-1.38-.78-3.38-5.04-3.43-7.1-1.25s-2.91,6.32-.62,8.65c2.43,2.47,7.04,1.57,9.57-.26s3.85-5.53,2.12-8.4-6.01-3.1-8.01-.42c-.87,1.16,1.09,2.28,1.94,1.14,1.43-1.91,4.22-.34,4.55,1.59.46,2.72-1.83,4.71-4.25,5.33-1.19.3-2.73.47-3.84-.19s-1.31-1.97-1.14-3.12.82-2.57,1.87-3.25c.96-.62,2.45-.48,2.74.78l.79-1.38c-4.66,1.67-9.59,1.58-14.47,1.39-3.5-.14-7.58-.11-10.05,2.79-.42.49-.43,1.1,0,1.59,2.37,2.74,6.34,3.36,9.71,2.37s7.53-4.4,5.95-8.47-6.85-2.89-10.23-3c-1.27-.04-2.56-.14-3.82-.34-1-.16-2.38-.36-2.48-1.61-.14-1.93,1.93-3.91,3.32-4.99,1.77-1.37,4.03-2.34,6.28-2.43,1.82-.07,4.16.54,4.5,2.6.23,1.43,2.4.82,2.17-.6h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m147.67,2.87c-.53-.83-1.23-1.23-2.21-1.3-.65-.05-1.07.56-1.12,1.12-.53,5.76-.15,11.56,1.07,17.21.23,1.04,1.53.98,2.06.27,1.19-1.59,2.6-3.55,4.68-3.95s3.74.97,3.13,3.1-2.93,3.11-4.81,3.66c-2.39.7-4.89.71-7.3.08l.5,1.88c.31-.36.63-.63,1.12-.69,1.42-.17,1.44-2.42,0-2.25-1.08.13-1.98.51-2.71,1.35-.53.62-.37,1.65.5,1.88,3.28.85,6.78.69,9.93-.59,2.63-1.07,5.19-3.17,5.16-6.26-.03-2.92-2.59-4.73-5.37-4.44-3.07.31-5.04,2.79-6.76,5.1l2.06.27c-1.18-5.46-1.5-11.05-.99-16.62l-1.12,1.12.27.18c.77,1.22,2.72.09,1.94-1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m163.62,7.16l-1.31-1.88c-.65-.93-2.01-.57-2.1.57-.45,6.3-.21,12.6.68,18.85.14,1.01,1.6,1.02,2.06.27,1.62-2.7,3.79-4.98,6.42-6.71l-1.54-.4c.79,1.68,1.1,3.58.85,5.43-.1.73.28,1.4,1.08,1.42.95.03,1.9.05,2.85.08,1.45.04,1.45-2.21,0-2.25-.95-.03-1.9-.05-2.85-.08l1.08,1.42c.34-2.5,0-4.87-1.08-7.16-.25-.53-1.07-.72-1.54-.4-2.95,1.94-5.41,4.49-7.23,7.52l2.06.27c-.85-6.04-1.03-12.16-.59-18.25l-2.1.57,1.31,1.88c.82,1.18,2.77.06,1.94-1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m184.19,15.87c-1.07-1.78-3.27-2.42-5.23-1.97-2.08.48-3.63,2.23-4.66,4.01-.58,1-1.12,2.14-1.01,3.33.09.94.54,1.8,1.27,2.39,1.45,1.19,3.53,1.43,5.23.66,2.19-.99,3.44-3.25,4.48-5.3l-2.1-.57c.3,2.34,1.26,4.47,2.91,6.18,1,1.05,2.59-.55,1.59-1.59-1.2-1.24-2.03-2.87-2.25-4.59-.06-.5-.31-.94-.83-1.08-.46-.13-1.05.08-1.27.52-.69,1.37-1.41,2.79-2.58,3.81-.93.81-2.05,1.06-3.17.59-.4-.16-.74-.42-.93-.81-.06-.11-.12-.37-.11-.55.02-.43.18-.83.37-1.22.67-1.34,1.59-2.71,2.97-3.39,1.1-.53,2.7-.41,3.37.7.74,1.24,2.69.11,1.94-1.14h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m190.45,16.46c-.25-.09-.35-.26-.29-.51l-.33.8c.73-.86,1.24,1.85,1.3,2.2.3,1.53.6,3.07.9,4.6.18.91,1.66,1.14,2.06.27.64-1.4,1.44-2.73,2.44-3.9.44-.51,2.62-3.14,3.39-2.72.56.3.49,2.26.69,2.84.32.96.99,1.76,1.88,2.24,1.83.98,4.26.71,5.9-.52,2.23-1.68,3.04-4.52,3.69-7.1.3-1.19-1.47-2.05-2.06-.87-1.57,3.15-1.91,6.72-.88,10.1.42,1.38,2.6.79,2.17-.6-.86-2.79-.66-5.75.65-8.37l-2.06-.87c-.56,2.22-1.26,5.5-3.73,6.37-.86.3-1.98.32-2.76-.2-.86-.57-.83-1.66-.99-2.58-.17-.97-.54-1.95-1.46-2.44-1.24-.67-2.54-.02-3.53.75-2.28,1.77-4.09,4.11-5.29,6.73l2.06.27c-.35-1.77-.65-3.56-1.04-5.33-.26-1.2-.75-2.41-1.91-2.98-.98-.48-2.29-.38-3.01.51-.89,1.1.03,2.66,1.07,3.25,1.26.71,2.4-1.23,1.14-1.94h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m211.66,6.37v-2.4c0-.29-.13-.59-.33-.8s-.52-.34-.8-.33c-.61.03-1.12.49-1.12,1.12v2.4c0,.29.13.59.33.8s.52.34.8.33c.61-.03,1.12-.49,1.12-1.12h0Z"
                style={{ fill: '#374151;' }}
              />
              <path
                d="m190.46,35.64l-2.27-1.45-.57,2.1c14.18-.69,28.33-1.77,42.45-3.24,1.19-.12,1.61-1.86.3-2.21-1.1-.29-2.18-.15-3.13.49-1.2.8-.08,2.75,1.14,1.94.47-.31.85-.41,1.4-.26l.3-2.21c-14.12,1.48-28.27,2.56-42.45,3.24-1.12.05-1.52,1.48-.57,2.1l2.27,1.45c1.22.78,2.35-1.16,1.14-1.94h0Z"
                style={{ fill: '#374151;' }}
              />
            </g>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
