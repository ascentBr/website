import React from 'react'
import style from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form>
        <div className={style.formContainer}>
            <input
                type="email"
                placeholder="Email"
            />
            <button
                type="submit"
        
            >
                Atrair Novos Clientes
            </button>
        </div>
    </form>
  )
}

export default ContactForm