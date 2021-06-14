/**
 * Utility component to only display content on desktop screne sizes (> md)
 * @component
 * @prop {string} display - display property applied on element
 */

 export default function DesktopOnly(props) {
    DesktopOnly.defaultProps = { display: "block" };

    return (
        <div className={`desktop-only${ ' ' + props.display }`}>
            {props.children}
        </div>
    );
}
