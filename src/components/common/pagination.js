import React, { Component } from 'react';
import _ from 'lodash'

const Pagination = (props) => {

        const {itemsCount, pageSize, currentPage, onPageChange}=props

        const pageCount=Math.ceil( itemsCount/pageSize);
        console.log(pageCount);
        const pages=  _.range(1, pageCount + 1 )
        console.log(pages);
    return ( 
        <nav aria-label="Page navigation example">
             <ul className="pagination">
                 {pages.map((page)=>{
                     return  <li key={page} className={page===currentPage ?'page-item active':'page-item'}>
                         <a className="page-link" href="#" 
                           onClick={()=>onPageChange(page)}>{page}</a>
                         </li>
                 })}
                
             </ul>
        </nav>
     );
}
 
export default Pagination;