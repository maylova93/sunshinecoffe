// Importerer CSS-moduler til styling
import styles from './Checkout.module.scss';

// Checkout-komponenten viser en formular til kundeinformation og en opsummering af ordren
export const Checkout = () => {
    return (
        <div className={styles.checkoutContainer}>
            {/* Overskrift for Checkout-siden */}
            <h2>Checkout</h2>

            {/* Indhold opdelt i formularsektion og opsummeringssektion */}
            <div className={styles.checkoutContent}>

                {/* Formularsektion til kundeinformation */}
                <div className={styles.formSection}>
                    <form>
                        {/* Input til fornavn */}
                        <label>First name</label>
                        <input type="text" placeholder="Enter your first name" required />

                        {/* Input til efternavn */}
                        <label>Last name</label>
                        <input type="text" placeholder="Enter your last name" required />

                        {/* Input til adresse */}
                        <label>Address</label>
                        <input type="text" placeholder="Enter your address" required />

                        {/* Input til by */}
                        <label>City</label>
                        <input type="text" placeholder="Enter your city" required />

                        {/* Input til telefonnummer */}
                        <label>Phone</label>
                        <input type="text" placeholder="Enter your phone number" required />

                        {/* Input til provins */}
                        <label>Province</label>
                        <input type="text" placeholder="Enter your province" required />

                        {/* Input til land */}
                        <label>Country</label>
                        <input type="text" placeholder="Enter your country" required />
                    </form>
                </div>

                {/* Sektion til ordresammendrag */}
                <div className={styles.summarySection}>
                    <h3>Order Summary</h3>

                    {/* Viser detaljer om produkter i kurven */}
                    <div className={styles.orderDetails}>
                        <p>The Wahaj x 1 - 129 Dkk</p>
                        <p>Cultivate x 3 - 507 Dkk</p>
                        <hr />
                        <p><strong>Total:</strong> 636 Dkk</p>
                    </div>

                    {/* Valgmuligheder for levering */}
                    <div className={styles.shippingOptions}>
                        <h4>Choose shipping</h4>
                        <label>
                            <input type="radio" name="shipping" value="fakeex" />
                            FakeEx
                        </label>
                        <label>
                            <input type="radio" name="shipping" value="fakeex-express" />
                            FakeEx Express
                        </label>
                    </div>

                    {/* Knap til at betale */}
                    <button className={styles.payButton}>Pay now</button>
                </div>
            </div>
        </div>
    );
};
