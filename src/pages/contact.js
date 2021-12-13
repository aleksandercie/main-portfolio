import React from 'react';
import Layout from '../Layout/Layout/Layout';
import Seo from '../seo/seo';
import Container from '../layout/Container/Container';
import Typography from '../common/Typography/Typography';
import Description from '../components/Description/Description';
import Links from '../components/Links/Links';
import { contact } from '../content/contact';
import '../styles/pages/contact.scss';

const Contact = () => {
  const { description, title, subtitle, links } = contact;

  return (
    <Layout>
      <Seo title="Contact" />
      <Container customClass="contact" variant>
        <Typography variant="h1" customClass="contact__title" type="title--main" animate>
          {title}
        </Typography>
        <Description description={description} subtitle={subtitle} animate />
        <Links links={links} animate />
      </Container>
    </Layout>
  );
};

export default Contact;
