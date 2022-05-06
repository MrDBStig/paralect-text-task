import {useGlobalContext} from "../../context";

const Pagination = () => {
  const {repoOffset, user, endOffset, page, pageCount, getPageRange, setPage} = useGlobalContext();
  const {publicRepos} = user;

  return <div className="pagination">
    <div className="pagination__info">
      {`${repoOffset}-${endOffset <= publicRepos ? endOffset : publicRepos} of ${publicRepos} items`}
    </div>
    <div className="pagination__control">
      <button
        className="btn" onClick={() => page > 0 && setPage(page - 1)} disabled={page === 0}>{`<`}</button>
      <div className="pagination__numbers">
        {page >= pageCount - 2 && (
          <>
            <button className={page === 0 ? `pageItem active` : `pageItem`}
                    onClick={() => setPage(0)}>
              1
            </button>
            <div className="dots">...</div>
          </>
        )}
        {getPageRange(page, pageCount).map((currentPage) => (
            <button
              key={currentPage}
              className={currentPage === page ? `pageItem active` : `pageItem`}
              onClick={(event) => setPage((event.target.textContent - 1))}
            >
              {currentPage + 1}
            </button>
          ))}
        {page < pageCount - 1 && (
          <>
            <div className="dots">...</div>
            <button className={pageCount === page ? `pageItem active` : `pageItem`}
              onClick={() => setPage(pageCount)}>
              {pageCount + 1}
            </button>
          </>
        )}
      </div>
      <button className="btn" onClick={() => page < pageCount && setPage(page + 1)}
              disabled={page === pageCount}>{`>`}</button>
    </div>
  </div>;
}

export default Pagination;