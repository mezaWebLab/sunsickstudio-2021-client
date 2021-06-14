export default function ContactForm() {
    return (
        <div className="contact-form">
            <form>
                <input 
                    type="text"
                    placeholder="Your Name" />
                <input 
                    type="text"
                    placeholder="Your Email" />
                <textarea 
                    placeholder="Message">
                </textarea>
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}