import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
		<meta charSet='utf8'></meta>
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}