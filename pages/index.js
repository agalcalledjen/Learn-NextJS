import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const Home = ({ shows }) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
