'use client';
import React, { useState } from 'react'
import style from './ContactForm.module.scss'
import { getEmailTemplate } from '@/app/utils/GetEmailTemplate';
import { toast } from 'react-toastify';
type ContactFormProps = {
    buttonText?: string;
    buttonStyle?: "primary" | "secondary";
}



const ContactForm = ({ buttonText = "Atrair Novos Clientes", buttonStyle = "primary" }: ContactFormProps) => {

    const [disableButton, setDisableButton] = useState(false);
    const [formData, setFormData] = useState({
        // name: '',
        email: '',
        // message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDisableButton(true);
        toast("Enviando email...");

        // if (!recaptchaToken) {
        //     alert('Please complete the reCAPTCHA');
        //     return;
        // }

        console.log('Form submitted:', formData);

        fetch('/api/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: formData.email,
                subject: `🥳 NOVO CONTATO VIA SITE`,
                text: getEmailTemplate({
                    email: formData.email,
                    subject: `🥳 NOVO CONTATO VIA SITE`,
                    message: "Um novo contato foi feito via site, verifique o email para mais detalhes.",
                })
                // recaptchaToken, // Send the token to the server for verification
            }),
        })
            .then((response) => {
                if (response.ok) {
                    toast.success("Email enviado com sucesso!");
                    setFormData({ email: '' });
                    console.log('Email sent successfully');
                } else {
                    toast.error("Falha ao enviar email.");
                    console.error('Failed to send email');
                }
            })
            .catch((error) => {
                toast.error("Falha ao enviar email.");
                console.error('Error sending email:', error);
            }).finally(() => {
                setDisableButton(false);

            });
    };

    return (
        <form  onSubmit={handleSubmit}>
            <div className={`${style.formContainer}`}>
                <input
                   type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={buttonStyle === "primary" ? style.primaryInput : style.secondaryInput}
                />
                <button
                    type="submit"
                    disabled={disableButton}
                    className={buttonStyle === "primary" ? style.primaryButton : style.secondaryButton}
                >
                    {buttonText}
                </button>
            </div>
        </form>
    )
}

export default ContactForm