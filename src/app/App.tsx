import { useEffect, useState } from "react";
import { AboutPage } from "../features/about/AboutPage";
import { CatalogPage } from "../features/catalog/CatalogPage";
import { ContactPage } from "../features/contact/ContactPage";
import { HomePage } from "../features/home/HomePage";
import { ServicesPage } from "../features/services/ServicesPage";
import { SiteLayout } from "../layout/SiteLayout";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/pages/home.css";
import "../styles/pages/catalog.css";
import "../styles/pages/content-pages.css";
import "../styles/responsive.css";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string) => {
    const next = normalizePath(to);
    if (next !== path) window.history.pushState({}, "", next);
    setPath(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let page = <HomePage navigate={navigate} />;
  if (path.startsWith("/magazin"))
    page = <CatalogPage path={path} navigate={navigate} />;
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
