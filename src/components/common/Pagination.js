import React from "react"

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  console.log(totalPosts)
  console.log(currentPage)
  const pageNumber = []

  const pageSize = Math.ceil(totalPosts / postsPerPage)
  for (let i = 1; i <= pageSize; i++) {
    pageNumber.push(i)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }
  return (
    <>
      <div className="pagination-area">
        <ul className="pagination">
          {pageNumber.map(number => (
            <li>
              <a
                className={number === currentPage ? "active" : ""}
                onClick={() => {
                  paginate(number)
                  scrollToTop()
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Pagination
