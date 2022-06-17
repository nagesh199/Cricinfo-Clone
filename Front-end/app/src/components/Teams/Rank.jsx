import React from "react";

export const Rank = ({ imageId, style, player, runs, Innings, Average }) => {
  return (
    <><div>
          <img src={imageId} alt="" />
    </div>
      <div>
        <p>
          {player} {style}
        </p>
        <h2>{runs}</h2>
       <div> <p>Innings:{Innings}</p><p>Average:{Average}</p></div>
      </div>
    </>
  );
};
