import React from 'react';
import Layout from '../Layout/Layout/Layout';
import Seo from '../seo/seo';
import Links from '../components/Links/Links';
import Container from '../layout/Container/Container';
import Typography from '../common/Typography/Typography';
import { work, title } from '../content/work';
import '../styles/pages/work.scss';

const Work = () => {
  const renderProjects = work.map((item) => {
    const { name, description, links, link, id } = item;
    return (
      <Container customClass="work__container" animate key={id}>
        <Typography variant="h2" customClass="work__name" type="title--secondary">
          {name}
        </Typography>
        {link ? (
          <Links links={links} customClass="work__links" />
        ) : (
          <Typography variant="p" customClass="work__description" type="description">
            {description}
          </Typography>
        )}
      </Container>
    );
  });

  return (
    <Layout>
      <Seo title="Work" />
      <Container customClass="work" variant>
        <Typography variant="h1" customClass="work__title" type="title--main" animate>
          {title}
        </Typography>
        {renderProjects}
      </Container>
    </Layout>
  );
};

export default Work;
