import Container from "components/UI/Container/Container";
import { useEffect, useRef } from "react";

export default function Footer() {
    const el = useRef(),
        setHeight = () => {
            const DOM_lastSectionEl = document.querySelectorAll(".section:last-child")[0];
            el.current.style.paddingTop = ((DOM_lastSectionEl.offsetHeight / 2) + 50) + "px";
            el.current.style.marginTop = -(DOM_lastSectionEl.offsetHeight / 2) + "px";
        };

    useEffect(() => {
        setHeight();
        window.addEventListener("resize", () => setHeight()); 
    }, []);

    return (
        <div 
            ref={el}
            className="footer">
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
            <Container>
                <p className="alex-jacobelli"><strong>ALEX JACOBELLI</strong> - AUDIO ENGINEER</p>
                <p className="credits">WEBSITE BY <a href="https://mezaweblab.com" target="_blank">MEZWEBLAB</a></p>
            </Container>
        </div>
    );
}
