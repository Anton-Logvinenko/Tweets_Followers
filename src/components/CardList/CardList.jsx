import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

import { fetchData } from '../../operation/fetchData';
import css from './CardList.module.css';
export const CardList = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);

  // const effectRan = useRef(false);
 

  useEffect(() => {
    // if (effectRan.current) 
      async function getUsers() {
      try {
        const userData = await fetchData(page);
        setShowUsers(prevState => [...prevState, ...userData]);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
        
    // return()=> effectRan.current = true
  }, [page]);

  const onClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.cardConteiner}>
      <ul className={css.list}>
        {showUsers.map(user => (
          <li key={user.id}>
            <Card userData={user} />
          </li>
        ))}
      </ul>
      {showUsers.length >= 3 && (
        <button className={css.btn} type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
};
