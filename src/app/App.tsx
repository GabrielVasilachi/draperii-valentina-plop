import { useEffect, useState } from "react";
import { AboutPage } from "../features/about/AboutPage";
import { CatalogPage } from "../features/catalog/CatalogPage";
import { ContactPage } from "../features/contact/ContactPage";
import { HomePage } from "../features/home/HomePage";
import { GalleryPage } from "../features/gallery/GalleryPage";
import { ServicesPage } from "../features/services/ServicesPage";
import { ProductDetailPage } from "../features/products/ProductDetailPage";
import { products } from "../features/products/data/products";
import { SiteLayout } from "../layout/SiteLayout";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/pages/home.css";
import "../styles/pages/catalog.css";
import "../styles/pages/content-pages.css";
import "../styles/responsive.css";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";
const canonicalizePath = (path: string) =>
  normalizePath(path).replace(/^\/magazin(?=\/|$)/, "/catalog");

function App() {
  const [path, setPath] = useState(() =>
    canonicalizePath(window.location.pathname),
  );

  useEffect(() => {
    const currentPath = normalizePath(window.location.pathname);
    const canonicalPath = canonicalizePath(currentPath);
    if (canonicalPath !== currentPath) window.history.replaceState({}, "", canonicalPath);

    const onPopState = () => {
      const nextPath = canonicalizePath(window.location.pathname);
      if (nextPath !== normalizePath(window.location.pathname)) {
        window.history.replaceState({}, "", nextPath);
      }
      setPath(nextPath);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string) => {
    const next = canonicalizePath(to);
    if (next !== path) window.history.pushState({}, "", next);
    setPath(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const productSlug = path.startsWith("/catalog/") && !path.startsWith("/catalog/page/")
    ? path.split("/")[2]
    : null;
  const selectedProduct = products.find((product) => product.slug === productSlug);

  let page = <HomePage navigate={navigate} />;
  if (selectedProduct)
    page = <ProductDetailPage key={selectedProduct.id} product={selectedProduct} navigate={navigate} />;
  else if (path.startsWith("/catalog"))
    page = <CatalogPage path={path} navigate={navigate} />;
  else if (path === "/galerie" || path === "/urmareste-ne") page = <GalleryPage navigate={navigate} />;
  else if (path === "/servicii") page = <ServicesPage navigate={navigate} />;
  else if (path === "/despre-noi") page = <AboutPage navigate={navigate} />;
  else if (path === "/contact") page = <ContactPage />;

  return (
    <SiteLayout path={path} navigate={navigate}>
      {page}
    </SiteLayout>
  );
}

export default App;
