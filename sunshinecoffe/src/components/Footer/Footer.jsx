import styles from './footer.module.scss';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h3>Contact</h3>
                <p>Supercoffeeroad 223b</p>
                <p>92230 New Coffeeland</p>
                <p>Phone: 22331122</p>
                <p>Mail: coffeeland@info.com</p>
            </div>
            <div className={styles.footerSection}>
                <h3>Legal</h3>
                <NavLink to="/cookie-policy" activeClassName={styles.activeLink}>Cookie Policy</NavLink>
                <br />
                <NavLink to="/terms-conditions" activeClassName={styles.activeLink}>Terms and Conditions</NavLink>
                <NavLink to="/shipping-policy" activeClassName={styles.activeLink}>Shipping Policy</NavLink>
                <NavLink to="/return-policy" activeClassName={styles.activeLink}>Return Policy</NavLink>
            </div>
            <div className={styles.footerSection}>
                <h3>About</h3>
                <p>History</p>
                <p>The people behind</p>
                <p>Partnerships</p>
                <p>International</p>
            </div>
        </footer>
    );
};
