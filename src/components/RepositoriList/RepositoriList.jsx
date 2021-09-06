import style from './repositori.module.css'
import Repositori from "./Repositori";

const RepositoriList = ({repositories}) => {
   return(
      <div>
         {
            repositories.length
            ? repositories.map(repo =>
               <Repositori key={repo.id} repo={repo}/>
               )
            : <div className={style.info_string}>Ничего не найдено!</div>
         }
      </div>
   )
}

export default RepositoriList;