import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/layout/layout";
import { HomePage } from "./pages/home";
import { ProductsPage } from "./pages/products";
import { ServicesPage } from "./pages/services";
import { ScrollManager } from "./components/ScrollManager";

import { PoliciesPage } from "./pages/policies";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="services" element={<ServicesPage />} />

            <Route path="policies" element={<PoliciesPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
