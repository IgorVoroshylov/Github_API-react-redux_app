const SET_FAVOURITESLISTID = "SET_FAVOURITESLISTID";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

const defoultState = {
   favouritesListId: []
}

const favouritesInfoReducer = (state = defoultState, action) => {
   switch(action.type) {
      case SET_FAVOURITESLISTID:
         return {
            ...state,
            favouritesListId: [ ...state.favouritesListId, action.payload ]
         }
      case REMOVE_FROM_FAVOURITES:
         return {
            ...state,
            favouritesListId: [ ...state.favouritesListId.filter(id => id !== action.payload) ]
         }
      default:
         return state
   }
}

export const setFavouritesListId = (id) => ({type: SET_FAVOURITESLISTID, payload: id});
export const setRemoveFromFavourites = (id) => ({type: REMOVE_FROM_FAVOURITES, payload: id});

export default favouritesInfoReducer;