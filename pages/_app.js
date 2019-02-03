import React, { Fragment } from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import withReduxStore from "../lib/withReduxStore";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Fragment>
          <Head>
            <title>Vested Finance</title>
          </Head>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Fragment>
      </Provider>
    );
  }
}

export default withReduxStore(App);
