import style from './pagination.module.css';

const Pagination = ({pages, currentPage, chengePage}) => {
   return(
      <div className={style.pagination}>
         {
            pages.map((p, index) =>
               <button
                     key={index}
                     className={currentPage === p ? `${style.page} ${style.active}` : style.page}
                     onClick={() => chengePage(p)}>{p}</button>
               )
         }
      </div>
   )
}

export default Pagination;