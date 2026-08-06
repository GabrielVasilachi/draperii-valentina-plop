import type { Navigate } from "../../../shared/types/navigation";

type CatalogPaginationProps = {
  page: number;
  navigate: Navigate;
};

export function CatalogPagination({ page, navigate }: CatalogPaginationProps) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => navigate("/magazin")}>
        ←
      </button>
      <button
        className={page === 1 ? "active" : ""}
        onClick={() => navigate("/magazin")}
      >
        1
      </button>
      <button
        className={page === 2 ? "active" : ""}
        onClick={() => navigate("/magazin/page/2")}
      >
        2
      </button>
      <button disabled={page === 2} onClick={() => navigate("/magazin/page/2")}>
        →
      </button>
    </div>
  );
}
