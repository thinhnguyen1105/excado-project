import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context: any) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='google' content='notranslate'></meta>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' type='image/png' href='/static/images/favicon.png' />
        </Head>

        <body style={{background: '#f6f6f6', height: '100%', margin: 0, overflowX: 'hidden'}}>
          <Main />
          <NextScript />
          <script async src='/static/scripts/responsive-switch.min.js'></script>
        </body>
      </html>
    );
  }
}

export default MyDocument;
