
import styles from './testimonials.module.scss';

export const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2>Testimonies</h2>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <h3>John</h3>
                    <p>“Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className={styles.testimonial}>
                    <h3>Eva</h3>
                    <p>“Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className={styles.testimonial}>
                    <h3>Peter</h3>
                    <p>“Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className={styles.testimonial}>
                    <h3>Michelle</h3>
                    <p>“Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...”</p>
                </div>
            </div>
        </section>
    );
};


