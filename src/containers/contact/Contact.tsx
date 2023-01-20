import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Resume from "@public/cv-cjohnson.pdf";

export const Contact = (): JSX.Element => {
    const form = React.useRef<HTMLFormElement>(null);

    const handleSubmit =
    (event: any) => {
        event.preventDefault();
        const formInfo = form.current ? form.current: "";
        emailjs.sendForm(
            "service_j6mk07w",
            "template_0jf3c55",
            formInfo,
            "wzeV7jLVOTmlUXHYx"
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current?.reset();
    };

    return (
        <React.Fragment>
            <section id="contact" 
                className="app__section contact__section">
                <h1 className="contact__title">Contact</h1>
                <form 
                    
                    ref={form} 
                    onSubmit={handleSubmit}
                >
                    <aside>
                        <label htmlFor="name">Name</label>
                        <input 
                            className="form__input"
                            placeholder="Name"
                            type="text" 
                            name="user_name"
                        />
                    </aside>
                    <aside>
                        <label htmlFor="email">Email</label>
                        <input 
                            className="form__input"
                            placeholder="Email"
                            type="email" 
                            name="user_email"
                        />
                    </aside>
                    <aside>
                        <label htmlFor="message">Message</label>
                        <textarea 
                            className="form__message"
                            name="message" 
                            placeholder="Message" 
                        />
                    </aside>
                    <input 
                        className="form__button"
                        type="submit" 
                        value="Send"
                    />
                </form>
            </section>
        </React.Fragment>
    );
};


