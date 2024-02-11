import css from "./Profile.module.css";

export const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={}>
      <div className={}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={}>Petra Marica</p>
        <p className={}>@pmarica</p>
        <p className={}>Salvador, Brasil</p>
      </div>

      <ul className={}>
        <li className={}>
          <span className={}>Followers</span>
          <span className={}>1000</span>
        </li>
        <li className={}>
          <span className={}>Views</span>
          <span className={}>2000</span>
        </li>
        <li className={}>
          <span className={}>Likes</span>
          <span className={}>3000</span>
        </li>
      </ul>
    </div>
  );
};
