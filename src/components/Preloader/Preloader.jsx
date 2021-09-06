import style from './preloader.module.css'

const Preloader = () => {
   return(
      <div className={style.preloader}>
         <div className={style.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
   )
}

export default Preloader;