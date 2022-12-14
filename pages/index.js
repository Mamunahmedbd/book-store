import Head from "next/head";
import { Suspense } from "react";
import BookCard from "../components/BookCard";

export default function Home({ books }) {
  console.log(books);
  return (
    <Suspense>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {books
                ?.filter((book) => book.featured === true)
                .map((book, id) => (
                  <BookCard key={id} book={book} />
                ))}

              {/* <BookCard />
            <BookCard /> */}
            </div>
          </div>
        </section>
      </div>
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
