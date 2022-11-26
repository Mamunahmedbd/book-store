import React, { Suspense } from "react";
import BooksCard from "../../components/BooksCard";

export default function page({ books }) {
  return (
    <Suspense fallback={<h1>Load</h1>}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <h1>hello books</h1>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export async function getStaticProps(context) {
  // get the current environment
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch("http://localhost:3000/api/books");
  // extract the data
  let data = await response.json();

  return {
    props: {
      books: data["message"],
    },
  };
}
