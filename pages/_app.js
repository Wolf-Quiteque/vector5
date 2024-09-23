
import MainLayout from '../components/MainLayout'
import Head from 'next/head';
import 'animate.css';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
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
