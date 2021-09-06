import { createSelector } from "reselect";

//repositori

const getRepositoryList = (store) => {
   return store.repositori.repositoryList;
}

export const getSortType = (store) => {
   return store.repositori.sortType;
}

export const getCurrentPage = (store) => {
   return store.repositori.currentPage;
}

export const getRepositoriListSuper = createSelector(getRepositoryList, getSortType, getCurrentPage, (list, sortType) => {
         const sortedPosts = () => {
         if(sortType === 'created_at') {
            return [...list].sort((a,b) => String(Date.parse(a[sortType])).localeCompare(Date.parse(b[sortType])));
         } else if(sortType) {
            return [...list].sort((a,b) => String(a[sortType]).localeCompare(b[sortType]));
         }
         return list;
      };
      return sortedPosts();
})

export const getIsLoading = (store) => {
   return store.repositori.isLoading;
}

export const getPerPage = (store) => {
   return store.repositori.perPage;
}

export const getTotalCount = (store) => {
   return store.repositori.totalCount;
}

export const getSearchQuery = (store) => {
   return store.repositori.searchQuery;
}

// repo

export const getRepo = (store) => {
   return store.repo.repo;
}

export const getFetchingRepo = (store) => {
   return store.repo.fetchingRepo;
}

// favourites

export const getFavouritesListId = (store) => {
   return store.favouriteInfo.favouritesListId;
}