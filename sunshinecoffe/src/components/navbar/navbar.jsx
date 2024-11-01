// Importerer nødvendige hooks og komponenter fra React og react-router-dom
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import coffeeIcon from '../../assets/images/Coffee.png';
import cartIcon from '../../assets/images/shopCart.png';
import userIcon from '../../assets/images/user.png';
import { ShoppingCart } from '../ProductCard/ShoppingCart';
import styles from './navbar.module.scss';

// Navbar-komponentet viser navigation og ikonlinks
export const Navbar = ({ cart, setCart }) => {
    const navigate = useNavigate(); // Bruges til at navigere til andre sider
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Styrer synligheden af dropdown-menuen
    const [isCartVisible, setIsCartVisible] = useState(false); // Styrer synligheden af indkøbskurven

    // Navigerer til loginsiden, når brugeren klikker på brugerikonet
    const handleUserIconClick = () => {
        navigate('/signin');
    };

    // Toggler dropdown-menuen synlig/usynlig
    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    // Toggler synligheden af indkøbskurven
    const toggleCartVisibility = () => {
        setIsCartVisible((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            {/* Centralt logo og hjemmeside-link */}
            <div className={styles.navbarCenter}>
                <h1 className={styles.navbarTitle}>Sunshine Coffee</h1>
                <NavLink to="/" className={styles.coffeeIconWrapper}>
                    <img src={coffeeIcon} alt="Coffee Icon" className={styles.coffeeIcon} />
                </NavLink>
            </div>

            <div className={styles.navbarLinks}>
                {/* Dropdown-menu for Europa */}
                <div className={styles.dropdownContainer}>
                    <button className={styles.navbarLink} onClick={toggleDropdown}>
                        Europa
                    </button>
                    {isDropdownVisible && (
                        <div className={styles.dropdownMenu}>
                            <NavLink to="/france" className={styles.dropdownItem} activeClassName={styles.active}>Frankrig</NavLink>
                            <NavLink to="/germany" className={styles.dropdownItem} activeClassName={styles.active}>Tyskland</NavLink>
                            <NavLink to="/spain" className={styles.dropdownItem} activeClassName={styles.active}>Spanien</NavLink>
                        </div>
                    )}
                </div>

                {/* Indkøbskurv-ikon, som viser indkøbskurven ved klik */}
                <img
                    src={cartIcon}
                    alt="Shopping Cart"
                    className={styles.navbarIcon}
                    onClick={toggleCartVisibility}
                />

                {/* Viser ShoppingCart-komponentet, hvis isCartVisible er sandt */}
                {isCartVisible && (
                    <div className={styles.cartOverlay}>
                        <ShoppingCart
                            cart={cart}
                            setCart={setCart}
                            onClose={() => setIsCartVisible(false)} // Lukker indkøbskurven
                        />
                    </div>
                )}

                {/* Brugerikon, som navigerer til login-siden ved klik */}
                <img
                    src={userIcon}
                    alt="User"
                    className={styles.navbarIcon}
                    onClick={handleUserIconClick}
                />
            </div>
        </nav>
    );
};

// PropTypes til Navbar for at sikre korrekt type af props
Navbar.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};
