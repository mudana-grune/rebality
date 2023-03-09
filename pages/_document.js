import Footer from '@/components/Footer'
import ScrollUp from '@/components/ScrollUp'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ locale }) {
  return (
    <Html lang={locale}>
      <Head >
        <link rel="shortcut icon" type="image/icon" href="assets/images/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=optional" rel="stylesheet"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" defer ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
          integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
          crossOrigin="anonymous" defer ></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
          integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
          crossOrigin="anonymous" defer ></script>
        <script type="text/javascript" src="/assets/js/slick.min.js" defer ></script>
        <script type="text/javascript" src="/assets/js/app.js" defer ></script>
        <script type="text/javascript" src="/assets/js/custom.js" defer ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <ScrollUp />
        <Footer />
      </body>
    </Html>
  )
}
