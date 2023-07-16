import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/appContext";

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = page - 1;
    if (page === 1) {
      return;
    }
    changePage(newPage);
  };
  const nextPage = () => {
    let newPage = page + 1;
    if (page === pages.length) {
      return;
    }
    changePage(newPage);
  };

  return (
    <Wrapper>
      {page !== 1 && (
        <button className="prev-btn" onClick={prevPage}>
          <HiChevronDoubleLeft />
          prev
        </button>
      )}
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              type="button"
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              key={pageNum}
              onClick={() => changePage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      {page !== pages.length && (
        <button className="next-btn" onClick={nextPage}>
          next
          <HiChevronDoubleRight />
        </button>
      )}
    </Wrapper>
  );
};

export default PageBtnContainer;
