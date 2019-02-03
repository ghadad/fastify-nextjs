import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Vested finance" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="icon" href="/static/assets/favicon.ico" />
          <link rel="manifest" href="/static/assets/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
