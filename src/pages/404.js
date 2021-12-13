import React from 'react';
import Layout from '../layout/Layout/Layout';
import Seo from '../seo/seo';
import Container from '../layout/Container/Container';
import Typography from '../common/Typography/Typography';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container customClass="about" variant>
      <Typography variant="h1" customClass="about__title" type="title--main" align="center">
        404: Not Found
      </Typography>
      <Typography variant="p" customClass="description__item" type="description" align="center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Container>
  </Layout>
);

export default NotFoundPage;
