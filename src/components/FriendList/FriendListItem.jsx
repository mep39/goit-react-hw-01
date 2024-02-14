import clsx from "clsx";
import css from "../FriendList/FriendListItem.module.css";

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <li key={id} id={id} className={css.item}>
      <div className={css.wrapper}>
        <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p
          className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};
