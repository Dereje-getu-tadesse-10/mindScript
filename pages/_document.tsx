import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText, globalCss } from '../stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    listStyle: 'none',
    textDecoration: 'none',
  }
});



export default function Document() {
  globalStyles();
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
