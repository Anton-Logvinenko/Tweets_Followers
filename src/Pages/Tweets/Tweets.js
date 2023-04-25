import { CardList } from '../../components/CardList/CardList';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
// import Dropdown from 'react-dropdown';
import css from './Tweets.module.css';

export default function Tweets() {

  // const options = [
  //   'one', 'two', 'three'
  // ];
  // const defaultOption = options[0];




  const location = useLocation();
  const backLocationLink = useRef(location.state?.from ?? '/');
  return (
    <div>
      <div  className={css.conteiner} >
      <Link className={css.link} to={backLocationLink.current}>
        Go back
      </Link>
      {/* <Dropdown className={css.dropdown} arrowClassName='myArrowClassName' options={options}  value={defaultOption} placeholder="Select an option" />; */}
      </div>
      <CardList />
    </div>
  );
}
