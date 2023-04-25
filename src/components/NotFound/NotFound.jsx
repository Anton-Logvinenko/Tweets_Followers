import error404 from '../../images/404.jpg';
import css from '../NotFound/NotFound.module.css';
export const NotFound = () => {
  return <div className={css.box}>  <img src={error404} alt="error404" width="700"  /></div>;
};
