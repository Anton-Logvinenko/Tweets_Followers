import { CardList } from '../../components/CardList/CardList';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './Tweets.module.css';

export default function Tweets() {
  const location = useLocation();
  const backLocationLink = useRef(location.state?.from ?? '/');
  return (
    <div>
      <Link className={css.link} to={backLocationLink.current}>
        Go back
      </Link>
      <CardList />
    </div>
  );
}
