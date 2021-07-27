import "assets/scss/app.scss";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Sunsick Studio</title>
                <meta 
                    name="viewport" 
                    content="initial-scale=1.0, width=device-width" />
                <meta 
                    property="og:title" 
                    content="Sunsick Studio" />
                <meta 
                    property="og:url" 
                    content="https://sunsickstudio.com" />
                <meta 
                    property="og:image" 
                    content="meta.png" />
                <meta  
                    property="og:description"
                    content="Recording studio based in San Diego, CA." />
                <meta  
                    property="description"
                    content="Recording studio based in San Diego, CA." />
                <link 
                    rel="icon" 
                    href="/favicon.png" />
                <link 
                    rel="stylesheet" 
                    href="assets/vendor/line-awesome/css/shake.min.css" />
                <link 
                    rel="stylesheet" 
                    href="assets/vendor/line-awesome/css/line-awesome.min.css">
                </link>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}