import { useState, useRef } from "react";

export default function AccordionItem(props) {
    const [isActive, setIsActive] = useState(false),
        handlers = {
            onToggle() {
                if (isActive) {
                    refs.contentWrapper.current.style.height = "0px";
                } else {
                    refs.contentWrapper.current.style.height = refs.content.current.offsetHeight + "px";
                }

                setTimeout(() => setIsActive(isActive ? false : true), 250);

                props.onToggle();
            }
        },
        refs = {
            contentWrapper: useRef(),
            content: useRef()
        }

    return (
        <div className={`accordion-item${ isActive ? ' active' : '' }`}>
            <button onClick={() => handlers.onToggle()}>
                <div>
                    {props.title}
                </div>
                <div>
                    {isActive ? <i class="las la-minus"></i> : <i class="las la-plus"></i>}
                </div>
            </button>
            <div 
                ref={refs.contentWrapper}
                className="content-wrapper">
                <div 
                    ref={refs.content}
                    className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}