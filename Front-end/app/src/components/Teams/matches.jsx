import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from '../../CSS/Teams/homepage.module.css'
export const Matches = ({ list }) => {
  return (
    <>
      {list.map((el,i) => {
        return (
           <div key={i} className={styles.sublist}>
            <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} />
           <span>{el.vs}</span>
          </div>
        );
      })}
    </>
  );
};
