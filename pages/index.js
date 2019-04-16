import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import '../styles/index.css';

const regex = /(<([^>]+)>)/gi;

const Home = ({ shows }) => {
  return (
    <Layout>
      <div class='container my-12 mx-auto px-4 md:px-12'>
        <div class='flex flex-wrap -mx-1 lg:-mx-4'>
          {shows.map(show => (
            <Link
              as={`/p/${show.id}`}
              href={`/post?id=${show.id}`}
              key={show.id}
            >
              <div class='my-1 px-4 w-full md:w-1/2 lg:my-4 lg:w-1/3'>
                <div class='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                  <img
                    class='w-full'
                    src={`${show.image.medium}`}
                    alt={`Image of ${show.name}`}
                  />
                  <div class='px-6 py-4'>
                    <div class='font-bold text-xl mb-2'>{show.name}</div>
                    <p class='text-grey-darker text-base'>
                      Premiered: {show.premiered}
                    </p>
                  </div>

                  <>
                    {/* <p>{(show.summary = show.summary.replace(regex, ''))}</p> */}
                  </>
                  <div class='px-6 py-4'>
                    {show.genres.map(genre => (
                      <span
                        key={genre.id}
                        class='inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2'
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log('DATA', data);
  console.log(`DATA COUNT: ${data.length} `);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Home;
