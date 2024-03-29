import icons from '../../images/icons.svg';
import css from './Logo.module.css';


const Logo = () => {
  
  return (
    <div>
        <a href={process.env.PUBLIC_URL + '/'} className={css.logo} aria-label='Strona główna'>
        <svg className={css.logo_icon}>
            <use href={`${icons}#icon-logo`} />
        </svg>
        </a>
    </div>
  )
}

export default Logo;