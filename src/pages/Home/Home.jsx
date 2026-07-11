import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Carousel from '../../components/Carousel/Carousel';
import projects from '../../data/projects';
import News from '../../components/News/News';
// Map carousel images to project data, but use the new images
const carouselImageFiles = [
    '/images/carousel/CAD.png',
    '/images/carousel/Resilient.png',
    '/images/carousel/Hybrid1.png',
    '/images/carousel/Novel.png',
    '/images/carousel/AI.png',
];

const carouselImages = projects.slice(0, carouselImageFiles.length).map((project, idx) => ({
    url: carouselImageFiles[idx],
    title: project.title,
    description: project.briefDescription
}));

const Home = () => {
    useEffect(() => {
        document.title = "Home | NextGen Computing";
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Welcome to NextGen Computing Lab</h1>
            </section>

            <Carousel images={carouselImages} />

            <section className={styles.about}>
                <h2>About Us</h2>
                <p>Our research combines hardware software co-design, emerging technologies, and novel computing techniques to build scalable systems for next generation AI and scientific computing workloads.</p>
            </section>

            <section className={styles.news}>
                <News />
            </section>
        </div>
    );
};

export default Home;
