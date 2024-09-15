import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.userCard}>
      <div className={s.userInfo}>
        <img src={image} alt={`${name}'s avatar`} />
        <p className={s.userName}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.userStats}>
        <li>
          <span>Followers</span>
          <span className={s.stat}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.stat}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile