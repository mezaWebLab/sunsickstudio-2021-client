import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
    const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [message, setMessage] = useState(""),
        [submitted, setSubmitted] = useState(false),
        [success, setSuccess] = useState(false),
        [error, setError] = useState(false),
        handlers = {
            async onSubmit(e) {
                if (!submitted) {
                    e.preventDefault();
                    setSubmitted(true);

                    try {
                        const req = await axios.post("/api/send-email", { name, email, message });
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setSuccess(true);
                    } catch (e) {
                        console.log(e);
                        setSubmitted(false);
                        setError(true);
                    }
                }
            }
        };

    return (
        <div className="contact-form">
            <form onSubmit={handlers.onSubmit}>
                <div md="2">
                    <div>
                        <input 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="name"
                            placeholder="Your Name"
                            required />
                        <input 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="email"
                            placeholder="Your Email"
                            required />
                    </div>
                    <div>
                        <textarea 
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                            placeholder="Message">
                        </textarea>
                    </div>
                </div>
                {(success || error) ? (
                    <div className={`response${ success ? ' success' : '' }${ error ? ' error' : '' }`}>
                        {success ? 'Message sent! We will get in touch with you shortly.' : ''}
                        {error ? 'There was an error. Please try again.' : ''}
                    </div>
                ) : null}
                <button
                    className={submitted ? 'submitted' : ''} 
                    type="submit">
                    Send
                    {submitted ? (
                        <div className="submit-overlay">
                            <i className="las la-spinner"></i>
                        </div>
                    ) : null}
                </button>
            </form>
        </div>
    );
}