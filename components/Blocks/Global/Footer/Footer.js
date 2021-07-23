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
            <Container>
                <p className="alex-jacobelli"><strong>ALEX JACOBELLI</strong> - AUDIO ENGINEER</p>
                <p className="credits">WEBSITE BY <a href="https://alexmeza.me" target="_blank">ALEX MEZA</a></p>
            </Container>
        </div>
    );
}
