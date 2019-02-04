import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import GlobalStyles from "../components/GlobalStyles";
import Title from "../components/Title";
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
          <GlobalStyles />
          <Container>
            <Component {...pageProps} />
          </Container>
        </Fragment>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
