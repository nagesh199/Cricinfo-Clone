import React from 'react'

export const News = ({context,hline,intro,imageId}) => {
  return (
    <>
      <div>
      <img src={imageId} alt="" />
      </div>
      <div>
      <h3>{hline}</h3>
      <p>{intro}</p>
      </div>
      </>
  )
}
