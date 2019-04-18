import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const Post = ({ show }) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show.image.medium} />

      <>{/* <p>{(show.summary = show.summary.replace(regex, ''))}</p> */}</>
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
