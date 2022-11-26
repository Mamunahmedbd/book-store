import React from "react";
import Image from "next/image";
import Link from "next/link";

function BookCard({ book }) {
  const { title, author, image, price, featured, _id } = book;
  console.log(_id);
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {image && (
            <Image
              width={280}
              height={280}
              className="lg:h-80 md:h-60 w-full object-cover object-center"
              src={image}
              alt="blog"
              rel="preload"
            />
          )}

          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {author}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href={`books/${_id}`}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                <a>
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle> */}
                </svg>
                $ {price}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                ></svg>
                $ {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
