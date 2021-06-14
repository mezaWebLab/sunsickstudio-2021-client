import { Children, isValidElement, cloneElement } from "react";

export default function Accordion(props) {
    const handlers = {
            onAccordionItemToggle() {
                console.log("nice");
            }
        },
        childrenCloned = Children.map(props.children, child => {
            if (isValidElement(child)) return cloneElement(child, { onToggle: handlers.onAccordionItemToggle });
        });

    return (<div className="accordion">{childrenCloned}</div>);
}