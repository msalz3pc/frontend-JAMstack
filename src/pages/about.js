import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import Waves from '../components/waves';
import SEO from '../components/seo';
import '../styles/index.scss';


export default () => (
  <>
      <Layout>
          <SEO pageTitle="About" pageDescription="About Description" />
        <h1>About me</h1>
        <p>This is the page about me</p>
        <Link to="/">to homepage</Link>
          <Waves />
      </Layout>
  </>

);
