import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRepoThunk } from "../../redux/repoReducer";
import { useDispatch, useSelector } from "react-redux";
import style from './repo.module.css';
import Preloader from "../Preloader/Preloader";
import { getFetchingRepo, getRepo } from "../../redux/selectors";

const Repo = ({history}) => {
   const dispatch = useDispatch();
   const repo = useSelector(getRepo);
   const fetchingRepo = useSelector(getFetchingRepo);
   const {username, reponame} = useParams();

   useEffect(() => {
      dispatch(getRepoThunk(username, reponame));
   }, [dispatch, reponame, username]);

   if(fetchingRepo) {
      return <Preloader/>;
   }

   return(
      <div className={style.container}>
         <div className={style.repo}>
            <button onClick={() => history.goBack()}>Go back</button>
            <div className={style.main_info}>
               <div className={style.main_info_img}>
                  <img src={repo.owner.avatar_url} alt="sorry..." />
               </div>
               <div className={style.main_info_login}>{repo.owner.login}</div>
               <div className={style.main_info_name}>Название репозитория: {repo.name}</div>
               <div className={style.main_info_created_at}>Дата создания: {repo.created_at}</div>
               <div className={style.main_info_description}>Описание: {repo.description}</div>
               <a href={repo.html_url} target="_blank" rel="noreferrer" className={style.main_info_git_url}>Ссылка на github</a>
               <div className={style.main_info_stargazers_count}>Колличество звезд: {repo.stargazers_count}</div>
            </div>
         </div>
      </div>
   )
}

export default Repo;