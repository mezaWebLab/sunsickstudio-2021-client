export default function ContactForm() {
    return (
        <div className="contact-form">
            <form>
                <div md="2">
                    <div>
                        <input 
                            type="text"
                            className="name"
                            placeholder="Your Name" />
                        <input 
                            type="text"
                            className="email"
                            placeholder="Your Email" />
                    </div>
                    <div>
                        <textarea placeholder="Message"></textarea>
                    </div>
                </div>
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}