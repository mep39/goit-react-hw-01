import css from "../Profile/Profile.module.css";

export const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.conteiner}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.stat}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
