// Importerer PropTypes til prop-validering og CSS-moduler til styling
import PropTypes from 'prop-types';
import style from './ProductCard.module.scss';

// ProductCard-komponenten viser information om et produkt og en knap til at tilføje det til kurven
export const ProductCard = ({ product, onClick, addToCart }) => {
    // Hvis produktet ikke findes, returneres ingenting
    if (!product) return null;

    return (
        <div className={style.card} onClick={onClick}>
            {/* Viser produktets navn */}
            <h3 className={style.productName}>{product.name}</h3>
            {/* Viser produktets billede */}
            <img src={product.image} alt={product.name} className={style.productImage} />
            <div className={style.productDetails}>
                {/* Viser en label for produktets ristningsniveau */}
                <p className={style.roastLabel}>Roast:</p>
                {/* Viser ristningsniveau som aktive/inaktive prikker */}
                <div className={style.roastLevel}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={index < product.roast ? style.activeDot : style.inactiveDot}>●</span>
                    ))}
                </div>
                {/* Viser produktets pris */}
                <p className={style.price}>{product.price} DKK</p>
            </div>
            {/* Knap til at tilføje produktet til kurven */}
            <button
                className={style.addToCartButton}
                onClick={(e) => {
                    e.stopPropagation(); // Forhindrer klik på knappen i at trigge onClick på card
                    addToCart(product);
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

// PropTypes til ProductCard for at sikre korrekt type af props
ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired, // produktnavn skal være en streng
        image: PropTypes.string.isRequired, // produktbillede skal være en streng
        roast: PropTypes.number, // ristningsniveau er et tal
        price: PropTypes.number.isRequired, // pris skal være et tal
    }).isRequired,
    onClick: PropTypes.func.isRequired, // onClick skal være en funktion
    addToCart: PropTypes.func.isRequired, // addToCart skal være en funktion
};
