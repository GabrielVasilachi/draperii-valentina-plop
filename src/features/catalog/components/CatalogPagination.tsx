import type { Navigate } from "../../../shared/types/navigation";

type CatalogPaginationProps = {
  page: number;
  navigate: Navigate;
};

export function CatalogPagination({ page, navigate }: CatalogPaginationProps) {
  return (
    <div className="pagination">
      <button type="button" disabled={page === 1} onClick={() => navigate("/catalog")} aria-label="Pagina precedentă">
        ←
      </button>
      <button
        type="button"
        className={page === 1 ? "active" : ""}
        onClick={() => navigate("/catalog")}
        aria-label="Pagina 1"
        aria-current={page === 1 ? "page" : undefined}
      >
        1
      </button>
      <button
        type="button"
        className={page === 2 ? "active" : ""}
        onClick={() => navigate("/catalog/page/2")}
        aria-label="Pagina 2"
        aria-current={page === 2 ? "page" : undefined}
      >
        2
      </button>
      <button type="button" disabled={page === 2} onClick={() => navigate("/catalog/page/2")} aria-label="Pagina următoare">
        →
      </button>
    </div>
  );
}
