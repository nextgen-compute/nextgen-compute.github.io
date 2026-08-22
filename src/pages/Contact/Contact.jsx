import React, { useEffect } from 'react';
import styles from './Contact.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const professor = {
    name: 'Muhammad Rashed',
    title: 'Assistant Professor',
    email: 'muhammad.rashed@uta.edu',
    github: 'https://mrhrashed.github.io',
    linkedin: 'https://www.linkedin.com/in/muhammad-rashedul-haq-rashed/'
};

const Contact = () => {

    useEffect(() => {
        document.title = "Contact | NextGen Computing";
    }, []);

    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <section className={styles.contactInfo}>
                <div className={styles.card}>
                    <h2>Lab Director</h2>
                    <p className={styles.profName}>{professor.name}</p>
                    <p className={styles.profTitle}>{professor.title}</p>
                    <div className={styles.profConnections}>
                        <a href={`mailto:${professor.email}`} className={styles.icon} title="Email" aria-label="Send an email"><MdEmail /></a>
                        <a href={professor.github} target="_blank" rel="noopener noreferrer" className={styles.icon} title="GitHub" aria-label="Visit GitHub profile"><FaGithub /></a>
                        <a href={professor.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon} title="LinkedIn" aria-label="Visit LinkedIn profile"><FaLinkedin /></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Location</h2>
                    <p>NextGen Computing Lab</p>
                    <p>The University of Texas at Arlington</p>
                    <p>Arlington, TX 76019</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
