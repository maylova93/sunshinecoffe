// Importerer CSS-moduler til styling
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

// Modal-komponenten viser detaljer om et produkt og en knap til at tilføje det til kurven
export const Modal = ({ product, onClose, addToCart }) => {
    // Hvis produktet ikke findes, returneres ingenting
    if (!product) return null;

    return (
        // Modal-overlay som lukker modal ved klik udenfor indholdet
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* Modal-indhold, som forhindrer klik udenfor i at lukke modal */}
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* Luk-knap til modal */}
                <button className={styles.closeButton} onClick={onClose}>X</button>

                {/* Viser produktets navn */}
                <h5>{product.name}</h5>

                {/* Viser et stort billede af produktet */}
                <img src={product.image} alt={product.name} className={styles.productImageLarge} />

                {/* Viser produktbeskrivelse */}
                <p>{product.description}</p>

                {/* Viser ristningsniveauet for produktet */}
                <p>Roast Level: {product.roast}</p>

                {/* Viser produktets pris */}
                <p>{product.price} DKK</p>

                {/* Knap til at tilføje produktet til kurven, som også lukker modal */}
                <button
                    className={styles.addToCartButton}
                    onClick={() => {
                        addToCart(product); // Tilføjer produkt til kurven
                        onClose(); // Lukker modal
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// PropTypes til Modal for at sikre korrekt type af props
Modal.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired, // produktnavn skal være en streng
        image: PropTypes.string.isRequired, // produktbillede skal være en streng
        description: PropTypes.string, // produktbeskrivelse er en valgfri streng
        roast: PropTypes.number, // ristningsniveau er et tal
        price: PropTypes.number.isRequired, // pris skal være et tal
    }).isRequired,
    onClose: PropTypes.func.isRequired, // onClose skal være en funktion
    addToCart: PropTypes.func.isRequired, // addToCart skal være en funktion
};
