// Importerer NavLink-komponent fra react-router-dom og PropTypes til prop-validering
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ShoppingCart.module.scss';

// ShoppingCart-komponenten viser indkøbskurvens indhold og totalbeløb
export const ShoppingCart = ({ cart = [], setCart, onClose }) => {
    // Fjerner et produkt fra kurven
    const handleRemove = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Ændrer antallet af et produkt i kurven
    const handleQuantityChange = (productId, delta) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + delta } : item
                )
                .filter((item) => item.quantity > 0) // Fjerner produkter med 0 antal
        );
    };

    // Beregner subtotal, moms og totalbeløb
    const calculateTotal = () => {
        if (!cart || cart.length === 0) return { subtotal: 0, tax: 0, total: 0 };

        // Samlet pris uden moms
        const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        // Moms på 25%
        const tax = subtotal * 0.25;
        return {
            subtotal,
            tax,
            total: subtotal + tax, // Total inklusiv moms
        };
    };

    // Henter subtotal, moms og total fra beregningen
    const { subtotal, tax, total } = calculateTotal();

    return (
        <div className={styles.cartContainer}>
            {/* Lukker indkøbskurven ved klik på knappen */}
            <button className={styles.closeButton} onClick={onClose}>X</button>
            <h3>Shopping Cart</h3>
            {cart.length === 0 ? (
                <p>Your cart is empty</p> // Viser besked, hvis kurven er tom
            ) : (
                <ul>
                    {/* Mapper over kurven og viser hvert produkt */}
                    {cart.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                            <p>{item.name}</p>
                            <p>{(item.price * item.quantity).toFixed(2)} DKK</p>
                            <div className={styles.quantityControls}>
                                {/* Knapper til at ændre antal af produkt */}
                                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div>
                            {/* Fjerner produktet fra kurven */}
                            <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {/* Viser subtotal, moms og total */}
            <div className={styles.summary}>
                <p>Subtotal: {subtotal.toFixed(2)} DKK</p>
                <p>Tax (25%): {tax.toFixed(2)} DKK</p>
                <p>Total: {total.toFixed(2)} DKK</p>
            </div>
            {/* Link til checkout-side */}
            <NavLink
                to="/checkout"
                className={({ isActive }) => isActive ? `${styles.checkoutButton} active-link` : styles.checkoutButton}
            >
                Go to Checkout
            </NavLink>
        </div>
    );
};

// PropTypes til ShoppingCart for at sikre korrekt type af props
ShoppingCart.propTypes = {
    cart: PropTypes.array.isRequired, // cart skal være et array
    setCart: PropTypes.func.isRequired, // setCart skal være en funktion
    onClose: PropTypes.func.isRequired, // onClose skal være en funktion
};
