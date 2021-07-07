import { useEffect, useState } from "react";
import scrollToElement from "scroll-to-element";

export default function MobileMenu(props) {
    const [open, setOpen] = useState(false),
        handlers = {
            onClose() {
                setOpen(false);
                setTimeout(() => props.toggleMobileMenu(), 250);
            },
            onNavLinkClick(e, href) {
                e.nativeEvent.preventDefault();
                const targetEl = document.querySelector("#navigation");
                scrollToElement(href, { offset: -targetEl.offsetHeight });
                this.onClose();
            }
        };

    useEffect(() => { setOpen(true) }, []);

    return (
        <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <button 
                onClick={() => handlers.onClose()}
                className="close-btn">
                <i className="las la-times"></i>
            </button>
            <div className="menu-options">
                {props.navigation.map((navItem, i) => {
                    return (
                        <a 
                            onClick={e => handlers.onNavLinkClick(e, navItem.href)}
                            key={i}
                            href="#">
                            {navItem.title}
                        </a>
                    );
                })}
            </div>
            <img 
                alt="Sunsick Studio Logo"
                src="/assets/global/sunsick-studio-logo.png"
                className="logo" />
        </div>
    );
}