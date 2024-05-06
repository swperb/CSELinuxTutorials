// components/ContactUsButton.js

import React, { useEffect, useState } from 'react';
import styles from './ContactUsButton.module.css';

const ContactUsButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [showMessageSent, setShowMessageSent] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
        setStatus('idle');
    };

    const handleClickOutside = (event) => {
        if (isOpen && !event.target.closest(`.${styles.contactForm}`) && !event.target.closest(`.${styles.contactUsButton}`)) {
            setIsOpen(false);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact_form/contact_form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response) {
                setStatus('success');
                setTimeout(() => {
                    setShowMessageSent(true);
                }, 100);
                setForm({ name: '', email: '', message: '' });
            } else {
                throw new Error('Something went wrong');
            }

        } catch (error) {
            console.error(error);
            setStatus('idle');
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [isOpen]);


    return (
        <div>
            <div className={styles.contactUsButton} onClick={toggleForm}>
                Contact Us
            </div>


            {isOpen && (
                <div className={`${styles.contactForm} ${isOpen ? styles.contactFormOpen : ''}`}>
                    <button className={styles.closeButton} onClick={toggleForm}>×</button>
                    {status === 'idle' && (
                        <>
                            <h3>Contact Us</h3>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Name" className={styles.inputField} value={form.name} onChange={handleChange} required/>
                                <input type="email" name="email" placeholder="School Email" className={styles.inputField} value={form.email} onChange={handleChange} required/>
                                <textarea name="message" placeholder="Message" className={styles.textArea} value={form.message} onChange={handleChange} required></textarea>
                                <button type="submit" className={styles.submitButton}>Send</button>
                            </form>
                        </>

                    )}

                    {status === 'loading' && (
                        <div className={styles.loadingScreen}>
                            <div className={styles.spinner}></div>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className={styles.successScreen}>
                            <svg className={styles.checkmark} viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                                <path className={styles.checkmarkCheck} fill="none" d="M16 26l9 9 16-16"/>
                            </svg>

                            <p className={`${styles.messageSent} ${showMessageSent ? styles.show : ''}`}>Message sent!</p>
                        </div>
                    )}
                </div>
            )}
                    
        </div>
    );
};

export default ContactUsButton;
