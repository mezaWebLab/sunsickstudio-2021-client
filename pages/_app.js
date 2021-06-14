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
                <link 
                    rel="icon" 
                    href="/favicon.ico" />
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