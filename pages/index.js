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
          {/* <ul> */}
          {shows.map(show => (
            <div
              key={show.id}
              class='w-full sm:w-1/2 md:w-1/3 mb-4 bg-grey px-2'
            >
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <>
                  <a>{show.name}</a>
                  <p>{(show.summary = show.summary.replace(regex, ''))}</p>
                </>
              </Link>
            </div>
          ))}
          {/* </ul> */}
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
