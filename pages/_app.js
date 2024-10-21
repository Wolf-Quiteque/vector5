
import MainLayout from '../components/MainLayout'
import Head from 'next/head';
import Router from 'next/router';
import 'animate.css';
import '../globals.css';
import NProgress from 'nprogress'; // Import NProgress
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  // Start NProgress on route change start
Router.events.on('routeChangeStart', () => NProgress.start());
// Stop NProgress on route change complete
Router.events.on('routeChangeComplete', () => NProgress.done());
// Stop NProgress on route change error
Router.events.on('routeChangeError', () => NProgress.done());
    return (
        <>
 <Head>
        <title>Vector5</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
<link href="css/style2.css" rel="stylesheet"  />

      </Head>
            {" "}
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>{" "}


{/* Bootstrap */}
<Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  
      />
      

        </>
      );
    }

export default MyApp;