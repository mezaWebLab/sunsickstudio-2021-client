export default function Modal(props) {
    const handlers = {
        onClose() {
            props.close();
        }
    };

    return (
        <div className="modal">
            <button 
                onClick={() => handlers.onClose()}
                className="close-btn">
                <i className="las la-times"></i>
            </button>
        </div>
    );
}