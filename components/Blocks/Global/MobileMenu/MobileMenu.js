import { useEffect, useState } from "react";

export default function MobileMenu(props) {
    const [open, setOpen] = useState(false),
        handlers = {
            onClose() {
                setOpen(false);
                setTimeout(() => props.toggleMobileMenu(), 250);
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
                            key={i}
                            href={navItem.href}>
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