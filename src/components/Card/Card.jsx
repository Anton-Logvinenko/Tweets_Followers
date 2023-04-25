import css from './Card.module.css';
import imgTweet from '../../images/TweetPicBG.png';
import ellipse from '../../images/Ellipse.png'
import logo from '../../images/Logo.png';
import { useEffect, useState } from 'react';
import { folowUser } from '../../operation/fetchData';
export const Card = ({ userData }) => {
  const { id, user, followers, tweets, avatar, clickFollowers } = userData;

  const [follow, setFollower] = useState(followers);
  const [value, setValue] = useState(clickFollowers);

  
  const heandelClick = () => {
    if (value) {
      setFollower(prevState => prevState + 1);
      setValue(false);
    } else {
      setFollower(prevState => prevState - 1);
      setValue(true);
    }

  };

  useEffect(() => {
      async function updateApi() {
    try {
      await folowUser({ id, follow,value });
    } catch (error) {
      console.log(error);
    }
  }
  updateApi();
  }, [id, follow,value ]);

 

  const folowUI = follow.toLocaleString('en-US');

  return (
    <>
      <div className={css.card}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.imgTweet}>
          <img src={imgTweet} alt="Comics-cloud" width="308" />
        </div>
        <div className={css.rectangle}></div>
        <img className={css.imgAllipse} src={ellipse} alt={'ellipse'} width={95} />
        <div className={css.ellipse}>
          <img className={css.imgUser} src={avatar} alt={user} width={80} />
                 </div>

        <div className={css.tweetsBox}>
          <p className={css.text}>{`TWEETS ${tweets}`}</p>
          <p className={`${css.text} ${css.text_margin} `}>
            {`FOLLOWERS ${folowUI}`}
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
