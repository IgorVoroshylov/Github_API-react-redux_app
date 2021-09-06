import { gitHubApi } from "../API/api";

const SET_REPO = "SET_REPO";
const SET_FETCHING_REPO = "SET_FETCHING_REPO";

const defoultState = {
   repo: null,
   fetchingRepo: true
}

const repoReducer = (state = defoultState, action) => {
   switch(action.type) {
      case SET_REPO:
         return {
            ...state,
            repo: action.payload,
            fetchingRepo: false
         }
      case SET_FETCHING_REPO:
         return {
            ...state,
            fetchingRepo: action.payload
         }
      default:
         return state
   }
}

export const setRepo = (repo) => ({type: SET_REPO, payload: repo});
export const setFetchingRepo = (bool) => ({type: SET_FETCHING_REPO, payload: bool});

export const getRepoThunk = (username, reponame) => (dispatch) => {
   dispatch(setFetchingRepo(true))
   gitHubApi.getAccount(username, reponame)
   .then(data => {
      dispatch(setRepo(data));
   })
}

export default repoReducer;