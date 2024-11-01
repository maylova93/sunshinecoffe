import styles from './infoSection.module.scss';
import beansImage from '../../assets/images/Rectangle 2.png';
import bagsImage from '../../assets/images/Rectangle 3.png';
import cupImage from '../../assets/images/Rectangle 4.png';

export const InfoSection = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.card}>
                <h6>The right beans</h6>
                <p>
                    Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.
                </p>
                <img src={beansImage} alt="The right beans" />
            </div>
            <div className={styles.card}>
                <h6>Carefully handled</h6>
                <p>
                    Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.
                </p>
                <img src={bagsImage} alt="Carefully handled" />
            </div>
            <div className={styles.card}>
                <h6>From us to you</h6>
                <p>
                    Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.
                </p>
                <br />
                <img src={cupImage} alt="From us to you" />
            </div>
        </section>
    );
};


