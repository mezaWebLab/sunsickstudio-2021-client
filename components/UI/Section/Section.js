export default function Section(props) {
    return (
        <div
            id={props.id ? props.id : ''} 
            className={`section${ props.alt ? ' alt' : '' }${ props.fadeBg ? ' fade-bg' : '' }`}>
            {props.children}
        </div>
    );
}