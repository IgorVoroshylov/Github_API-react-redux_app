import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './main.module.css';
import { getRepositoriesThunk, setCurrentPage, setSortType } from '../../redux/repositoriReducer';
import Preloader from '../Preloader/Preloader';
import RepositoriList from '../RepositoriList/RepositoriList';
import Pagination from '../Pagination/Pagination';
import { pagesCreator } from '../../utils/pagesCreator';
import SearchForm from '../SearchForm/SearchForm';
import { getCurrentPage, getIsLoading, getPerPage, getRepositoriListSuper, getSearchQuery, getSortType, getTotalCount } from '../../redux/selectors';

const Main = () => {

   const dispatch = useDispatch();
   const repositories = useSelector(getRepositoriListSuper);
   const isLoading = useSelector(getIsLoading);
   const currentPage = useSelector(getCurrentPage);
   const perPage = useSelector(getPerPage);
   const totalCount = useSelector(getTotalCount);
   const sortType = useSelector(getSortType);
   const searchQuery = useSelector(getSearchQuery);

   // for pagination
   const pagesCount = Math.ceil(totalCount / perPage);
   const pages = [];
   pagesCreator(pages, pagesCount, currentPage);

   useEffect(() => {
      dispatch(getRepositoriesThunk(searchQuery, perPage, currentPage));
   }, [currentPage, searchQuery, perPage, dispatch]);

   const chengePage = (page) => {
      dispatch(setCurrentPage(page));
   }

   const chengeSortType = (sortTypeValue) => {
      dispatch(setSortType(sortTypeValue));
   }

   return(
      <div className={style.main}>
         <SearchForm/>
         <div className={style.select}>
            <select value={sortType} onChange={e => chengeSortType(e.target.value)}>
               <option disabled value="">Sort by</option>
               <option value='created_at'>date</option>
               <option value='stargazers_count'>reting</option>
               <option value='name'>name</option>
            </select>
         </div>
         {
            isLoading
            ? <Preloader/>
            : <RepositoriList repositories={repositories}/>
         }
         <div>
            <Pagination
                  pages={pages}
                  currentPage={currentPage}
                  chengePage={chengePage}/>
         </div>
      </div>
   )
}

export default Main;