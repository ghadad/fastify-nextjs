import React, { Fragment } from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import Title from "../components/Title";
import Layout from "../components/Layout";
import withReduxStore from "../lib/withReduxStore";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, path: router.pathname };
  }

  render() {
    const { Component, pageProps, reduxStore, path } = this.props;

    return (
      <Provider store={reduxStore}>
        <Fragment>
          <Title path={path} />
          <Layout path={path}>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Layout>
        </Fragment>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
