import React from 'react';
import { useState } from 'react';


function Pagination() {

  const [page, setPage] = useState(1); // initialized the page state with the initial value of 1
  const Previous = () => {
  if (page !== 1) {
    setPage(page - 1);
  } else {
    setPage(page);
  }
};
 
const Next = () => {
  if (page < 10) {
    setPage(page + 1);
  }
};
return(
<div className="pagination-button">
  <button className="pagination-button" onClick={Previous}>
    Previous
  </button>
  <button className="pagination-button" onClick={Next}>
    Next
  </button>
</div>
)
  
}

export default Pagination;