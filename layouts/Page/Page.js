import Navigation from "../../components/Blocks/Global/Navigation/Navigation";
import Footer from "../../components/Blocks/Global/Footer/Footer";
import MobileMenu from "../../components/Blocks/Global/MobileMenu/MobileMenu";
import { useState } from "react";
import Hero from "components/Blocks/Hero/Hero";
import BackgroundVideo from "components/Blocks/Global/BackgroundVideo/BackgroundVideo";

export default function Page(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
        navigation = [
            {
                title: "HOME",
                href: "/"
            },
            {
                title: "OUR STUDIO",
                href: "#our-studio"
            },
            {
                title: "LISTEN",
                href: "#listen"
            },
            {
                title: "DISCOGRAPHY",
                href: "#discography"
            },
            {
                title: "CONTACT US",
                href: "#contact-us"
            }
        ];

    return (
        <div className="page">
            <Navigation 
                navigation={navigation} 
                toggleMobileMenu={() => setMobileMenuOpen(mobileMenuOpen ? false : true)} />
            {mobileMenuOpen ? <MobileMenu navigation={navigation} toggleMobileMenu={() => setMobileMenuOpen(mobileMenuOpen ? false : true)} /> : null}
            <Hero />
            <div className="page-content">
                {props.children}
            </div>
            <Footer />
            <BackgroundVideo />
        </div>
    );
}