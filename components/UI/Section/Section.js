export default function Section(props) {
    return (
        <div className={`section${ props.alt ? ' alt' : '' }${ props.fadeBg ? ' fade-bg' : '' }`}>
            {props.children}
        </div>
    );
}