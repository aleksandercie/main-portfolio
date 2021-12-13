import React from 'react';
import Layout from '../Layout/Layout/Layout';
import Seo from '../seo/seo';
import Container from '../layout/Container/Container';
import Typography from '../common/Typography/Typography';
import Description from '../components/Description/Description';
import { about } from '../content/about';
import '../styles/pages/about.scss';

const About = () => {
  const { description, title, subtitle } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Container customClass="about" variant>
        <Typography variant="h1" customClass="about__title" type="title--main" animate>
          {title}
        </Typography>
        <Description description={description} subtitle={subtitle} animate />
      </Container>
    </Layout>
  );
};

export default About;
