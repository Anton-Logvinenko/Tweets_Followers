import css from './Card.module.css';
import imgTweet from '../../images/TweetPicBG.png';
import logo from '../../images/Logo.png';
import { useState } from 'react';

export const Card = ({ userData }) => {
  const { user, followers, tweets, avatar } = userData;

  const [follow, setFollower] = useState(followers);
  const [value, setValue] = useState(true);

  const heandelClick = () => {
    if (value) {
      setFollower(prevState => prevState + 1);
      setValue(false);
    } else {
      setFollower(prevState => prevState - 1);
      setValue(true);
    }
  };
  const declineFollow = (follow / 1000).toFixed(3).replace(/\./g, ',');

  return (
    <>
      <div className={css.card}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.imgTweet}>
          <img src={imgTweet} alt="Comics-cloud" width="308" />
        </div>
        <div className={css.rectangle}></div>
        <div className={css.ellipse}>
          <img className={css.imgUser} src={avatar} alt={user} width={80} />
        </div>

        <div className={css.tweetsBox}>
          <p className={css.text}>{`TWEETS ${tweets}`}</p>
          <p className={`${css.text} ${css.text_margin} `}>
            {`FOLLOWERS ${declineFollow}`}
          </p>
          <button
            className={`${css.btn} ${!value && css.btn_active}`}
            type="button"
            onClick={heandelClick}
          >
            {value ? 'FOLLOW' : 'FOLLOWING'}
          </button>
        </div>
      </div>
    </>
  );
};
