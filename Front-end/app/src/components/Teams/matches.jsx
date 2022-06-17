import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export const Matches = ({ list }) => {
  return (
    <>
      {list.map((el,i) => {
        return (
           <div key={i}>
            <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} />
          <span>{el.vs}</span>
          </div>
        );
      })}
    </>
  );
};
