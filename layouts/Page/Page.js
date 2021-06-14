import Navigation from "../../components/Blocks/Global/Navigation/Navigation";
import Footer from "../../components/Blocks/Global/Footer/Footer";
import MobileMenu from "../../components/Blocks/Global/MobileMenu/MobileMenu";
import { useState } from "react";
import Hero from "components/blocks/Hero/Hero";
import BackgroundVideo from "components/Blocks/Global/BackgroundVideo/BackgroundVideo";

export default function Page(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
        navigation = [
            {
                title: "Home",
                href: "#"
            },
            {
                title: "Our Studio",
                href: "#our-studio"
            },
            {
                title: "Listen",
                href: "#listen"
            },
            {
                title: "Discography",
                href: "#discography"
            },
            {
                title: "Contact Us",
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