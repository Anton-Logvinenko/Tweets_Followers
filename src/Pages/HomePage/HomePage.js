import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.conteiner}>
      <p className={css.text}>
        Welcome to the <br/> "Home page"! <br /> You can go to the 
      </p>
      <Link className={css.link} to="/tweets">
              TWEETS
      </Link>
    </div>
  );
}
