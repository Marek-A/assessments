import React, { useState, useEffect } from 'react';
function Blogpage() {
  const [posts, setPosts] = useState([]);
  const [numPosts] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  // GET POSTS
  useEffect(() => {
    fetch(`https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage}&perPage=${numPosts}page=1&sortDirection=desc&perPage=8`, {
      method: 'GET',
      headers: {
        token: 'pj11daaQRz7zUIH56B9Z',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setTotalPages(data.totalPages);
      });
  }, [currentPage, numPosts]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="blogpage-container">
      <div className='blog-container'>
        <div className="post-container">
          <div className='post-card'>
            {posts.map((post) => (
              <article key={post.id}>
                {/* DISCLAIMER: Image API is not working, URL for images is unknown, https://frontend-case-api.sbdev.nl/api/storage NO ACCESS, couldn't get images posted, replaced with random image */}
                <img src={"https://unsplash.it/300/100"} alt={post.title} />
                <div className="text">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* This code is creating a basic pagination component that allows users to navigate between pages of content. Using the Array from method to create an array of length totalPages, and then mapping over this array to create a series of <a> elements with page numbers as their content. Disabled errors "/anchor-is-valid". Not the best method, but works */}
      <div className="pagination-container">
        <div className="pagination">

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 1 ? 'active' : ''}
              onClick={() => handlePageClick(page + 1)}
            >
              {page + 1}

            </a>

          ))}

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 2 ? 'active' : ''}
              onClick={() => handlePageClick(page + 2)}
            >
              {page + 2}
            </a>

          ))}

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 3 ? 'active' : ''}
              onClick={() => handlePageClick(page + 3)}
            >
              {page + 3}
            </a>

          ))}

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 4 ? 'active' : ''}
              onClick={() => handlePageClick(page + 4)}
            >
              {page + 4}
            </a>

          ))}

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 5 ? 'active' : ''}
              onClick={() => handlePageClick(page + 5)}
            >
              {page + 5}
            </a>

          ))}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
          <a>...</a>

          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 18 ? 'active' : ''}
              onClick={() => handlePageClick(page + 18)}
            >
              {page + 18}
            </a>

          ))}


          {Array.from(Array(totalPages).keys()).map((page) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid 
            <a
              key={page}
              href="#"
              className={currentPage === page + 19 ? 'active' : ''}
              onClick={() => handlePageClick(page + 19)}
            >
              {page + 19}
            </a>

          ))}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
          <a id="volgende"
            href="#"
            className={currentPage === totalPages ? 'disabled' : ''}
            onClick={handleNextClick}
          >
            Volgende pagina &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogpage;
