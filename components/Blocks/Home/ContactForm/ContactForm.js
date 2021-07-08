import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
    const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [message, setMessage] = useState(""),
        handlers = {
            onSubmit(e) {
                e.preventDefault();
                // todo: connect sendgrid api
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
                <button type="submit">Send</button>
            </form>
        </div>
    );
}