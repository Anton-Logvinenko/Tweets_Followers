
import css from './Filter.module.css';

export const Filter = ({clickAll,clickFollow,clickFollowing}) => {
 
  return (
    <div>
      <div className={css.card}>
   FILTER
        <div className={css.overlay}>
          <button className={css.btn}onClick={clickAll}>ALL</button>
          <button className={css.btn} onClick={clickFollow}>
            FOLLOW
          </button>
          <button className={css.btn}onClick={clickFollowing} >FOLLOWING</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
