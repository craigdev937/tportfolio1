import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact = (): JSX.Element => {
    const [username, setUserName] = React.useState("");
    const [useremail, setUserEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [confirmMsg, setConfirmMsg] = React.useState("");
    const form = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        setConfirmMsg("");
    }, []);

    // Updates State when Typed.
    const handleInput = 
    ({target}: React.ChangeEvent<
        HTMLInputElement | 
        HTMLTextAreaElement>
    ) => {
        const { name, value } = target;
        if (name === "username") setUserName(value);
        if (name === "useremail") setUserEmail(value);
        if (name === "message") setMessage(value);
    };

    // Displays error message when needed.
    const checkInput = ({target}: React.ChangeEvent<
        HTMLInputElement | 
        HTMLTextAreaElement>
    ) => {
        const {name, value} = target;
        if (name === "username") {
            if (value === "") {
                setErrorMsg("Please enter your Name.");
            }
        };
        if (name === "useremail") {
            if (value === "") {
                setErrorMsg("Please enter your Email");
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
                .test(value)){
                setErrorMsg("Please enter a valid email address.")
            }
        };
        if (name === "message") {
            if (value === "") {
                setErrorMsg("Please enter your Message.")
            }
        };
    };

    const sendAMessage = () => {
        setUserName("");
        setUserEmail("");
        setMessage("");
        setConfirmMsg("Your message was sent.");
    };

    // To send Email
    const handleSubmit =
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        .test(useremail)){
            setErrorMsg("Your email was invalid");
            return;
        };
        const formInfo = form.current ? form.current : "";
        emailjs.sendForm(
            "service_j6mk07w",
            "template_0jf3c55",
            formInfo,
            "wzeV7jLVOTmlUXHYx"
        )
        .then((result) => {
            sendAMessage();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current?.reset();
    };

    return (
        <React.Fragment>
            <section id="contact">
                <aside>
                    <h1 className="contact__title">Contact</h1>
                    <form 
                        ref={form} 
                        onSubmit={handleSubmit}
                    >                    
                        <input 
                            required
                            className="form__input"
                            placeholder="Name"
                            type="text" 
                            name="username"
                            value={username}
                            onBlur={checkInput}
                            onChange={handleInput}
                            onClick={() => setErrorMsg("")}
                        />
                        <input 
                            className="form__input"
                            placeholder="Email"
                            type="email" 
                            name="useremail"
                            value={useremail}
                            onBlur={checkInput}
                            onChange={handleInput}
                            onClick={() => setErrorMsg("")}
                        />
                        <textarea 
                            className="form__message"
                            name="message" 
                            placeholder="Message"
                            value={message} 
                            onBlur={checkInput}
                            onChange={handleInput}
                        />
                        <aside>{errorMsg}</aside>
                        <aside>{confirmMsg}</aside>
                        <input 
                            className="form__button"
                            type="submit" 
                            value="Send"
                        />
                    </form>
                </aside>
            </section>
        </React.Fragment>
    );
};



