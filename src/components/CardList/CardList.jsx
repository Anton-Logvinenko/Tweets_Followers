import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';

import {
  fetchData,
  fetchFollowing,
  fetchFollow,
  fetchAllpage,
  fetchFollowingPagges,
  fetchFollowPagges,
} from '../../operation/fetchData';
import css from './CardList.module.css';

export const CardList = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(null);
  const [clickFollowing, setClickFollowing] = useState(false);
  const [clickFollow, setClickFollow] = useState(false);

  // ALL pages
  useEffect(() => {
    if (clickFollowing || clickFollow) {
      return;
    }
    async function getUsers() {
      try {
             const data = await fetchAllpage();
        const allPagesData = Math.ceil(data.length / 3);
        setAllPage(allPagesData);


        const userData = await fetchData(page);
        setShowUsers(prevState => [...prevState, ...userData]);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [page, clickFollowing, clickFollow]);

  // Following pages
  
  useEffect(() => {
    if (!clickFollowing || clickFollow) {
      return;
    }
    async function getUsersFollowing() {
      try {
        const data = await fetchFollowingPagges();
        const allPagesData = Math.ceil(data.length / 3);
        setAllPage(allPagesData);
       
        const userData = await fetchFollowing(page);
        setShowUsers(prevState => [...prevState, ...userData]);
      } catch (error) {
        console.log(error);
      }
    }
    getUsersFollowing();
  }, [page, clickFollowing, clickFollow]);

  // Follow pages
  useEffect(() => {
    if (!clickFollow) {
      return;
    }
    async function getUsersFollow() {
      try {
        const data = await fetchFollowPagges();
        const allPagesData = Math.ceil(data.length / 3);
        setAllPage(allPagesData);

        const userData = await fetchFollow(page);
        setShowUsers(prevState => [...prevState, ...userData]);
      } catch (error) {
        console.log(error);
      }
    }
    getUsersFollow();
  }, [page, clickFollow]);


  const handelClickAll = () => {
    if (!clickFollowing && !clickFollow) {
      return;
    }
    setShowUsers([]);
    setClickFollowing(false);
    setClickFollow(false);
    setPage(1);
    setAllPage(null);
  };
  const handelClickFollow = () => {
    setShowUsers([]);
    setClickFollowing(false);
    setClickFollow(true);
    setPage(1);
    setAllPage(null);
  };
  const handelClickFollowing = () => {
    setShowUsers([]);
    setClickFollowing(true);
    setClickFollow(false);
    setPage(1);
    setAllPage(null);
  };

  const onClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
   <div className={css.cardListBox}
   >
      <Filter
        clickAll={handelClickAll}
        clickFollowing={handelClickFollowing}
        clickFollow={handelClickFollow}
      />
      <div className={css.cardConteiner}>
        <ul className={css.list}>
          {showUsers.map(user => (
            <li key={user.id}>
              <Card userData={user} />
            </li>
          ))}
        </ul>
        {showUsers.length >= 3 && page < allPage && (
          <button className={css.btn} type="button" onClick={onClick}>
            Load more
          </button>
        )}
      </div>
      </div>
  );
};
