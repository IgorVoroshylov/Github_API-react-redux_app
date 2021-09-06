import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import { setFavouritesListId, setRemoveFromFavourites } from '../../redux/reduxFavourites';
import { getFavouritesListId } from '../../redux/selectors';
import style from './repositori.module.css';
import star from '../../assets/Gold_Star.png';

const Repositori = ({repo}) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const favouritesIdList = useSelector(getFavouritesListId);

   const hasFavourites = favouritesIdList.includes(repo.id);

   const goToAccount = () => {
      history.push('/account/' + repo.owner.login + "/" + repo.name);
   }

   const addToFavourites = () => {
      dispatch(setFavouritesListId(repo.id));
   }

   const removeFromFavourites = () => {
      dispatch(setRemoveFromFavourites(repo.id));
   }

   return(
      <div className={style.repo}>
         <div>
            <div className={style.repo_avatar}>
               <img src={repo.owner.avatar_url} alt="" />
            </div>
            <div className={style.repo_name}>{repo.name}</div>
            <div className={style.repo_star}>Rating: {repo.stargazers_count}</div>
            <div className={style.repo_star}>Created: {repo.created_at}</div>
         </div>
         <div className={style.repo_info}>
            <div className={style.repo_info_img}>
               {
                  hasFavourites
                  ? <img src={star} alt="sory..." />
                  : null
               }
            </div>
            <div className={style.repo_button}>
               {
                  hasFavourites
                  ? <button onClick={removeFromFavourites}>Remove from favourites</button>
                  : <button onClick={addToFavourites}>Add to favourites</button>
               }
               <button onClick={goToAccount}>View more</button>
            </div>
         </div>
      </div>
   )
}

export default Repositori;