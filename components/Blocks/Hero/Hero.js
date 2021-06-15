import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const [ios, setIos] = useState(false);

    useEffect(() => {
        var ua = window.navigator.userAgent,
            iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i),
            webkit = !!ua.match(/WebKit/i),
            iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

        setIos(iOSSafari);
    }, []);

    return (
        <div 
            className={ios ? 'ios' : ''}
            id="hero">
            {/* <video 
                autoPlay 
                muted 
                playsInline
                loop>
                <source 
                    src="/assets/global/hero-video-bg.mp4" 
                    type="video/mp4">
                </source>
            </video> */}
            <Image 
                width={180}
                height={180}
                src="/assets/global/sunsick-studio-logo.png"
                alt="Sunsick Studio Logo" />
            <div className="fade"></div>
        </div>
    );
}