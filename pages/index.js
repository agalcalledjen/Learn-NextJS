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
              <div class='my-1 px-4 py-2 w-full md:w-1/2 lg:my-4 lg:w-1/4'>
                <div class='max-w-sm rounded overflow-hidden shadow-lg bg-white group hover:bg-grey-darkest'>
                  <img
                    class='w-full'
                    src={`${show.image.medium}`}
                    alt={`Image of ${show.name}`}
                  />
                  <div class='px-6 py-4 pb-0 group-hover:text-white'>
                    <p class='font-bold text-xl mb-2 group-hover:text-white'>
                      {show.name}
                    </p>
                    {/* <p class='text-grey-darker text-base'>
                      Premiered: {show.premiered}
                    </p> */}
                  </div>

                  <div class='px-6 py-4 pt-0 flex flex-wrap'>
                    {show.genres.map(genre => (
                      <div class='p-1' key={genre.id}>
                        <span class='inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker'>
                          {genre}
                        </span>
                      </div>
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
