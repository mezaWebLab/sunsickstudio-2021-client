import { useEffect, useState } from "react";
import ArrowDown from "components/UI/ArrowDown/ArrowDown";

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
            <div className="logo-wrapper">
                <img 
                    alt="Sunsick Studio Logo"
                    src="/assets/global/sunsick-studio-logo.png" />
            </div>
            <div className="fade"></div>
            <ArrowDown />
        </div>
    );
}