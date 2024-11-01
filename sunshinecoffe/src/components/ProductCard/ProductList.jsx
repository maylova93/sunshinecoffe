// Importerer nødvendige hooks og komponenter
import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Modal } from './Modal';
import { ShoppingCart } from './ShoppingCart';
import styles from './ProductList.module.scss';

// ProductList-komponenten viser en liste af produkter og håndterer indkøbskurven
export const ProductList = () => {
  // State til produkter, valgt produkt, indkøbskurv og synlighed af kurven
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Henter produkter fra API'et ved første indlæsning
  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Opdaterer produktlisten
      })
      .catch((error) => console.error('Error fetching products:', error)); // Logger fejl ved indhentning
  }, []);

  // Åbner modal med detaljer om det valgte produkt
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Lukker modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Tilføjer et produkt til indkøbskurven
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Hvis produktet allerede er i kurven, øges antallet
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Hvis produktet ikke er i kurven, tilføjes det med quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCartVisible(true); // Åbner indkøbskurven
  };

  return (
    <div className={styles.productListContainer}>
      <h2>Our picks for you</h2>
      <div className={styles.productGrid}>
        {/* Viser produkterne, hvis de er hentet, ellers viser "Loading..." */}
        {products.length > 0 ? (
          products.map((product) => (
            product && ( // Sikrer, at produktet eksisterer før render
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
                addToCart={() => addToCart(product)}
              />
            )
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Viser modal med produktdetaljer, hvis et produkt er valgt */}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={closeModal}
          addToCart={() => addToCart(selectedProduct)}
        />
      )}

      {/* Viser indkøbskurv, hvis isCartVisible er sandt */}
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          onClose={() => setIsCartVisible(false)}
        />
      )}
    </div>
  );
};
