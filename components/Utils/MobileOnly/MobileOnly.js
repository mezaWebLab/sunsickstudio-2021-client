/**
 * Utility component to only display content on mobile screne sizes (> md)
 * @component
 * @prop {string} display - display property applied on element
 */

export default function MobileOnly(props) {
    MobileOnly.defaultProps = { display: "block" };

    return (
        <div className={`mobile-only${ ' ' + props.display }`}>{props.children}</div>
    );
}