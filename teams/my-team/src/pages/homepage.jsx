import React from 'react'
import { HomeBox } from '../components/HomeBox';
import HomeNews from "../data/homepage.json"
export const Homepage = () => {
    const  newsarr =HomeNews.HomeNews;
  return (
    <div>
        {newsarr.map((el,i)=>{
            return <div key={i}>
            <HomeBox {...el} />
            </div>
        })}
    </div>
  )
}
