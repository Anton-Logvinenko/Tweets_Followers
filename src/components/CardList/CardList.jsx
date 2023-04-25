import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

import { fetchData } from '../../operation/fetchData';
import css from './CardList.module.css';
export const CardList = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [num, setNum] = useState(3);
 
  console.log(showUsers);

  useEffect(() => {
    async function getUsers() {
      try {
        const userData = await fetchData();
        const idObj = userData.reduce(
          (acc, {id}) => ({ ...acc, [id]:true }),
          {}
        );
        console.log('idObj', idObj)
        setShowUsers(userData.slice(0, num));
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [num]);
  
  const onClick = () => {
    setNum(prevState => prevState + 3);
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
      {showUsers.length >=3 && <button className={css.btn} type="button" onClick={onClick}>
        Load more
      </button>}
    </div>
  );
};
