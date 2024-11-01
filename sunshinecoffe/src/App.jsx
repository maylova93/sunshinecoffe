import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from "./layout/Layout.jsx";
import { AllProducts } from "./pages/AllProducts";
import { Home } from "./pages/home/home"; 
import { SignInPage } from "./pages/SignInPage";
import { CookiePolicy } from "./pages/CookiePolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { ShippingPolicy } from "./pages/ShippingPolicy";
import { ReturnPolicy } from "./pages/ReturnPolicy";
import { Checkout } from './components/ProductCard/Checkout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
