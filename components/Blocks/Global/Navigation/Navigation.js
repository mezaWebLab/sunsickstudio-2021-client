
import MobileOnly from "components/Utils/MobileOnly/MobileOnly";
import DesktopOnly from "components/Utils/DesktopOnly/DesktopOnly";
import Container from "components/UI/Container/Container";
import { useState, useEffect } from "react";
import scrollToElement from "scroll-to-element";

export default function Navigation(props) {
    const [scrolled, setScrolled] = useState(false),
        handlers = {
            onLogoClick(e) {
                e.nativeEvent.preventDefault();
                scrollToElement("#hero");
            },
            onLinkClick(e, navItem) {
                const targetEl = document.querySelector("#navigation");
                scrollToElement(navItem.href, { offset: -targetEl.offsetHeight });
            }
        }

    useEffect(() => {
        window.addEventListener("scroll", () => setScrolled(window.scrollY > 100 ? true : false));
    }, []);

    return (
        <div 
            className={scrolled ? 'scrolled' : ''}
            id="navigation">
            <Container>
                <div className="inner-block-1">
                    <div 
                        className="inner-block-2"
                        columns="2">
                        <div className="block block-1">
                            <a 
                                onClick={e => handlers.onLogoClick(e)}
                                href="#">
                                <img src="/assets/global/sunsick-studio-logo.png" />
                            </a>
                        </div>
                        <div className="block block-2">
                            <MobileOnly>
                                <a  
                                    className="social-link"
                                    target="_blank"
                                    href="https://facebook.com/sunsickstudio">
                                    <i className="lab la-facebook"></i>
                                </a>
                                <a  
                                    className="social-link"
                                    target="_blank"
                                    href="https://instagram.com/sunsickstudio">
                                    <i className="lab la-instagram"></i>
                                </a>
                                <button onClick={() => props.toggleMobileMenu()}>
                                    <i className="las la-bars"></i>
                                </button>
                            </MobileOnly>
                            <DesktopOnly display="flex">
                                <div>
                                    <a  
                                        className="social-link"
                                        target="_blank"
                                        href="https://facebook.com/sunsickstudio">
                                        <i className="lab la-facebook"></i>
                                    </a>
                                    <a  
                                        className="social-link"
                                        target="_blank"
                                        href="https://instagram.com/sunsickstudio">
                                        <i className="lab la-instagram"></i>
                                    </a>
                                    <br />
                                    <div className="nav-links-wrapper">
                                        {props.navigation.map((navItem, i) => {
                                            return (
                                                <a 
                                                    key={i}
                                                    href={navItem.href}
                                                    onClick={e => handlers.onLinkClick(e, navItem)}>
                                                    {navItem.title}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </DesktopOnly>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
