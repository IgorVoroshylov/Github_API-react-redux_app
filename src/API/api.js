import * as axios from "axios"

const instans = axios.create({
   baseURL: 'https://api.github.com/'
})

export const gitHubApi = {
   getRepositories(searchQuery, currentPage, perPage) {
      return instans.get(`search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
      .then(respons => {
         return respons.data;
      });
   },
   getAccount(username, reponame) {
      return instans.get(`repos/${username}/${reponame}`)
      .then(respons => {
         return respons.data;
      });
   }
}