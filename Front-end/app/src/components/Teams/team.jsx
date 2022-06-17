export const Team = ({ teamName, imageId }) => {
    return (
      <div>
        <img src={imageId} alt="" />
        <span>{teamName}</span>
      </div>
    );
  };
  