import { FriendListItem } from "../FriendList/FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
