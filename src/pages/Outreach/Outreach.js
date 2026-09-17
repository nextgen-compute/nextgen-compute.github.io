import React, { useEffect } from 'react';
import styles from './Outreach.module.css';

const Outreach = () => {

    useEffect(() => {
        document.title = "Outreach | NextGen Computing";
    }, []);

    // Only one outreach activity for now
    const outreachActivities = [
       

        {
            id: 1,
            title: 'Making Computer Science Education More Accessible',
            description: 'Release of new open textbook, “Computer Organization and Assembly Language Programming”! Designed specifically for CSE 2312, the textbook takes students from number systems and CPU fundamentals to writing assembly programs using a Raspberry Pi. Created with support from UTA Libraries through the UTA CARES Grant, the textbook provides students with free access to course materials from day one while removing a financial barrier to learning. With hundreds of students taking CSE 2312 each semester, the open textbook could save the Maverick community nearly $10,000 every semester.',
            articleUrl: 'https://libraries.uta.edu/news/making-first-day-class-little-easier-oer',
            image: '/images/outreach/book.jpg',
            date: 'August 2026',
        },
        {
            id: 2,
            title: 'Engineering Teen Academy Summer Camp 2026',
            description: 'Educating pre-college students on next-generation AI-accelerator systems',
            image: '/images/outreach/summer_camp26.jpg',
            date: 'June 2026',
        },
        {
            id: 3,
            title: ' 2026 National AiC High School Award',
            description: 'Sanvi is one of the 300 high school students from the United States to be recognized.',
            image: '/images/outreach/NCWIT.png',
            date: 'Spring 2026',
        },
            
        {
            id: 4,
            title: 'College of Engineering Academic Excellence Ceremony',
            description: 'Sifat wins the Hesed Endowed Scholarship.',
            image: '/images/outreach/Sifat-Hesed.jpeg',
            date: 'Spring 2026',
        },
        
        {
            id: 5,
            title: 'CSE PhD Welcoming Event',
            description: 'The annual PhD Student Welcoming Event celebrating our students’ new beginnings and continued progress.',
            image: '/images/outreach/phd_welcome.jpg',
            date: 'Fall 2025',
        },
        
        
        {
            id: 6,
            title: 'Engineering Teen Academy Summer Camp 2025',
            description: 'Educating pre-college students on next-generation AI-accelerator systems',
            image: '/images/outreach/Outreach1.jpg',
            date: 'June 2025',
        },
        {
            id: 7,
            title: 'UR2PHD program',
            description: 'Two undergraduate researchers and one graduate student from the NextGen Computing Lab participated in the UR2PHD program in Summer 25.',
            image: '/images/outreach/Outreach2.png',
            date: 'Summer 2025',
        },

          {
            id: 8,
            title: 'Research Experiences for Undergraduates (REU)',
            description: 'One undergraduate researcher participated in the REU program from Fall 2024 to Spring 2025 to explore the capabilities of LLMs in developing EDA solutions.',
            image: '/images/outreach/REU.png',
            date: 'Fall 2024- Spring 2025',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Outreach & Activities</h1>
            <p className={styles.subtitle}>
                
            </p>
            <section className={styles.gallery}>
                {outreachActivities.map((activity) => (
                    <article className={styles.card} key={activity.id}>
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>{activity.title}</h2>
                            <div className={styles.cardDate}>{activity.date}</div>
                          <div className={styles.cardDesc}>
                            {activity.description}
                        
                            {activity.articleUrl && (
                                <>
                                    {' '}
                                    <a
                                        href={activity.articleUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read the news article
                                    </a>
                                </>
                            )}
                        </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Outreach; 
