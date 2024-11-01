import { useNavigate } from 'react-router-dom';
import styles from './shopNow.module.scss';

export const ShopNow = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/products'); 
    };

    return (
        <div className={styles.wrapper}>
            <section className={styles.shopNow}>
                <h2>Shop now</h2>
                <p>
                    Our delicious coffees will get you brewing the best cup of coffee you ever tasted in
                    no time at all. And the best part of it? It is totally organic, fair trade, and
                    sustainably sourced. So get brewing!
                </p>
                <button onClick={handleButtonClick} className={styles.button}>
                    Go to products
                </button>
            </section>
        </div>
    );
};


