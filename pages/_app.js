
import MainLayout from '../components/MainLayout'
import Head from 'next/head';
import 'animate.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
 <Head>
        <title>Vector5</title>
        <link href="/css/style.css" rel="stylesheet" />


<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />

      </Head>
            {" "}
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>{" "}
            <Script src="/js/modernizr-3.6.0.min.js" />

{/* jQuery */}
<Script src="/js/jquery-3.6.0.min.js"  />
<Script src="/js/jquery-migrate-3.3.0.min.js"  />

{/* Bootstrap */}
<Script src="/js/bootstrap.bundle.min.js"  />

{/* Other Libraries */}
<Script src="/js/waypoints.js" strategy="afterInteractive" />
<Script src="/js/wow.js" strategy="afterInteractive" />
<Script src="/js/magnific-popup.js" strategy="afterInteractive" />
<Script src="/js/perfect-scrollbar.min.js" strategy="afterInteractive" />
<Script src="/js/select2.min.js" strategy="afterInteractive" />
<Script src="/js/isotope.js" strategy="afterInteractive" />
<Script src="/js/scrollup.js" strategy="afterInteractive" />
<Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
<Script src="/js/noUISlider.js" strategy="afterInteractive" />
<Script src="/js/slider.js" strategy="afterInteractive" />

{/* Count down */}
<Script src="/js/counterup.js" strategy="afterInteractive" />
<Script src="/js/jquery.countdown.min.js"  />

{/* Zoom and slick */}
<Script src="/js/jquery.elevatezoom.js" strategy="afterInteractive" />
<Script src="/js/slick.js" strategy="afterInteractive" />

{/* Main and shop scripts */}
<Script src="/js/main.js" strategy="afterInteractive" />
<Script src="/js/shop.js" strategy="afterInteractive" />

        </>
      );
    }

export default MyApp;
