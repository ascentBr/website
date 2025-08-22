import React from 'react'
import style from './ContactForm.module.scss'
type ContactFormProps = {
    buttonText?: string;
    buttonStyle?: "primary" | "secondary";
}
const ContactForm = ({ buttonText = "Atrair Novos Clientes", buttonStyle = "primary" }: ContactFormProps) => {
    return (
        <form>
            <div className={`${style.formContainer}`}>
                <input
                    type="email"
                    placeholder="Email"
                      className={buttonStyle === "primary" ? style.primaryInput : style.secondaryInput}
                />
                <button
                    type="submit"
                    className={buttonStyle === "primary" ? style.primaryButton : style.secondaryButton}
                >
                    {buttonText}
                </button>
            </div>
        </form>
    )
}

export default ContactForm