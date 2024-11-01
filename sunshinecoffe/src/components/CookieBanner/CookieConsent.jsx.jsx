// Importerer useState til at styre synligheden af cookiebanneret
import { useState } from 'react';

// CookieConsent-komponenten viser et banner for samtykke til cookies
export const CookieConsent = () => {
  // State til at holde styr på, om cookiebanneret er synligt
  const [isVisible, setIsVisible] = useState(true);

  // Funktionskald, når brugeren accepterer cookies
  const acceptCookies = () => {
    setIsVisible(false); // Skjuler cookiebanneret
    loadGoogleAnalytics(); // Indlæser Google Analytics scriptet
  };

  // Indlæser Google Analytics scriptet, hvis det ikke allerede er indlæst
  const loadGoogleAnalytics = () => {
    if (!window.gtag) {
      // Opretter et script-element til Google Analytics
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X';
      script.async = true;
      document.head.appendChild(script);

      // Initialiserer Google Analytics, når scriptet er indlæst
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'UA-XXXXXXXXX-X'); // Din Google Analytics tracking ID
      };
    }
  };

  // Hvis cookiebanneret er skjult, returneres ingenting
  if (!isVisible) return null;

  return (
    // Viser cookiebanneret som et overlay på hele skærmen
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '400px', textAlign: 'center' }}>
        {/* Tekst, der forklarer brugen af cookies */}
        <p>Vi bruger cookies til at forbedre din oplevelse. Ved at klikke "Acceptér" giver du samtykke til brugen af cookies.</p>
        
        {/* Knap, som brugeren klikker på for at acceptere cookies */}
        <button onClick={acceptCookies} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#FFC107', border: 'none', borderRadius: '5px' }}>
          Acceptér
        </button>
      </div>
    </div>
  );
};
