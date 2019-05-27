import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const regex = /(<([^>]+)>)/gi;

const Post = ({ show }) => {
  return (
    <Layout>
      <div class='container my-12 mx-auto px-4 md:px-12'>
        <div class='max-w-md w-full lg:flex shadow-lg rounded overflow-hidden'>
          <div
            class='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            style={{
              backgroundImage: `url(${show.image.medium})`
            }}
            alt={`Image of ${show.name}`}
            title={`${show.name}`}
          />
          <div class='p-4 flex flex-col justify-between leading-normal'>
            <div class='mb-8'>
              <h2>{show.name}</h2>
              <p class='text-grey-darker text-base mb-2'>
                Premiered: {show.premiered}
              </p>
              <p class='text-grey-darker text-base'>
                {(show.summary = show.summary.replace(regex, ''))}
                {/* <p>{show.summary.replace(/<[/]?p>/g, '')}</p> */}
              </p>
            </div>
          </div>
        </div>
        {/* <h1>{show.name}</h1> */}

        {/* <img src={show.image.medium} /> */}
      </div>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched Show: ${show.name}`);

  return { show };
};

export default withRouter(Post);
