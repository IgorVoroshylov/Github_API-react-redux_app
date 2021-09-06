import { gitHubApi } from "../API/api";

const SET_REPOSITORIES = "SET_REPOSITORIES";
const SET_ISLOADING = "SET_ISLOADING";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";
const SET_PERPAGE = "SET_PERPAGE";
const SET_TOTALCOUNT = "SET_TOTALCOUNT";
const SET_SEARCHQUERY = "SET_SEARCHQUERY";
const SET_SORTTYPE = "SET_SORTTYPE";

const defoultState = {
   repositoryList: [],
   isLoading: false,
   currentPage: 1,
   perPage: 10,
   totalCount: 0,
   searchQuery: '',
   sortType: ''
}

const repositoriReducer = (state = defoultState, action) => {
   switch(action.type) {
      case SET_REPOSITORIES:
         return {
            ...state,
            repositoryList: action.payload,
            isLoading: false
         }
      case SET_TOTALCOUNT:
         return {
            ...state,
            totalCount: action.payload
         }
      case SET_CURRENTPAGE:
         return {
            ...state,
            currentPage: action.payload
         }
      case SET_ISLOADING:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_SEARCHQUERY:
         return {
            ...state,
            searchQuery: action.payload
         }
      case SET_SORTTYPE:
         return {
            ...state,
            sortType: action.payload
         }
      default:
         return state
   }
}

export const setRepositoryList = (repositories) => ({type: SET_REPOSITORIES, payload: repositories});
export const setIsLoading = (bool) => ({type: SET_ISLOADING, payload: bool});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, payload: currentPage});
export const setPerPage = (page) => ({type: SET_PERPAGE, payload: page});
export const setTotalCount = (total) => ({type: SET_TOTALCOUNT, payload: total});
export const setSearchQuery = (query) => ({type: SET_SEARCHQUERY, payload: query});
export const setSortType = (sortType) => ({type: SET_SORTTYPE, payload: sortType});

export const getRepositoriesThunk = (searchQuery, currentPage, perPage) => (dispatch) => {
   if(!searchQuery) {
      searchQuery = 'stars:%3E1'; // установили значение по умолчанию, для получения репозиториев по рейтингу
   }
   dispatch(setIsLoading(true));
   gitHubApi.getRepositories(searchQuery, perPage, currentPage)
   .then(data => {
      dispatch(setRepositoryList(data.items));
      dispatch(setTotalCount(data.total_count));
   })
}

export default repositoriReducer;