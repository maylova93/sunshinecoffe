// Importerer nødvendige komponenter og hooks fra React Router
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../components/header/header.jsx';
import { Footer } from '../components/Footer/Footer';
import { CookieConsent } from '../components/CookieBanner/CookieConsent.jsx';
import { Testimonials } from '../components/Testimonials/Testimonials.jsx';

// Layout-komponenten definerer det overordnede layout på siden
export const Layout = () => {
    const location = useLocation(); // Bruges til at hente den aktuelle URL-sti
    const showTestimonials = location.pathname === '/' || location.pathname === '/signin'; // Viser testimonials kun på / og /signin

    return (
        <>
          
            <Navbar />
            <CookieConsent />
            {/* Viser Header kun på hjemmesiden (/) */}
            {location.pathname === '/' && <Header />}
            {/* Main-indhold på siden */}
            <main>
                <Outlet /> 
                {/* Viser testimonials sektionen på specifikke sider */}
                {showTestimonials && <Testimonials />}
                <Footer />
            </main>
        </>
    );
};
