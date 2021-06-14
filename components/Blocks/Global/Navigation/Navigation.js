
import MobileOnly from "components/Utils/MobileOnly/MobileOnly";
import DesktopOnly from "components/Utils/DesktopOnly/DesktopOnly";
import Container from "components/UI/Container/Container";
import { useState, useEffect } from "react";

export default function Navigation(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY > 100 ? true : false);
        });
    }, []);

    return (
        <div 
            className={scrolled ? 'scrolled' : ''}
            id="navigation">
            <Container>
                <MobileOnly display="flex">
                    <div columns="2">
                        <div className="block">
                            <img src="/assets/global/sunsick-studio-logo.png" />
                        </div>
                        <div className="block">
                            <a href="#">
                                <i className="lab la-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="lab la-instagram"></i>
                            </a>
                            <button onClick={() => props.toggleMobileMenu()}>
                                <i className="las la-bars"></i>
                            </button>
                        </div>
                    </div>
                </MobileOnly>
                <DesktopOnly display="flex">
                    <div columns="2">
                        <div className="block">

                        </div>
                        <div className="block">

                        </div>
                    </div>
                </DesktopOnly>
            </Container>
        </div>
    );
}
