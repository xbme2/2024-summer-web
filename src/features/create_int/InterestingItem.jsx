/* eslint-disable react/prop-types */

import styles from "./InterestingItem.module.css";

import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

function InterestingItem({ interesting }) {
  // eslint-disable-next-line react/prop-types

  const { name, followingNums, image } = interesting;

  function onFollowing() {}

  return (
    <li>
      {/*<img src={interesting.Poster} alt={interesting.id}></img>*/}
      <div className={styles.row}>
        <NavLink
          className={styles.link}
          to={`/app/interestings/${interesting.id}`}
        >
          <img src={image} />
          <p>
            {name}
            <br />
            {followingNums}人已加入
          </p>
        </NavLink>
        <Button variant="primary" onClick={() => onFollowing}>
          +关注
        </Button>
      </div>
    </li>
  );
}

export default InterestingItem;
