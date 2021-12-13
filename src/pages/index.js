import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../Layout/Layout/Layout';
import Seo from '../seo/seo';
import Intro from '../components/Intro/Intro';
import BackgroundImage from '../components/Background/Background';
import Helper from '../components/Helper/Helper';
import { homepage } from '../content/homepage';

const IndexPage = ({ data }) => {
  const image = getImage(data.file);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Layout>
      <Seo title="Home" />
      <Intro homepage={homepage} show={show} />
      <BackgroundImage image={image} />
      <Helper setShow={setShow} show={show} handleClick={handleClick} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "Home.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
