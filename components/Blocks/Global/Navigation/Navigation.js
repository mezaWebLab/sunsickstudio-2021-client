
import MobileOnly from "components/Utils/MobileOnly/MobileOnly";
import DesktopOnly from "components/Utils/DesktopOnly/DesktopOnly";
import Container from "components/UI/Container/Container";
import { useState, useEffect } from "react";
import Link from "next/link";

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
                <div className="inner-block-1">
                    <div 
                        className="inner-block-2"
                        columns="2">
                        <div className="block block-1">
                            <img src="/assets/global/sunsick-studio-logo.png" />
                        </div>
                        <div className="block block-2">
                            <MobileOnly>
                                <a  
                                    className="social-link"
                                    href="#">
                                    <i className="lab la-facebook"></i>
                                </a>
                                <a  
                                    className="social-link"
                                    href="#">
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
                                        href="#">
                                        <i className="lab la-facebook"></i>
                                    </a>
                                    <a  
                                        className="social-link"
                                        href="#">
                                        <i className="lab la-instagram"></i>
                                    </a>
                                    <br />
                                    <div className="nav-links-wrapper">
                                        {props.navigation.map((navItem, i) => {
                                            return (
                                                <Link 
                                                    key={i}
                                                    href={navItem.href}>
                                                    {navItem.title}
                                                </Link>
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
