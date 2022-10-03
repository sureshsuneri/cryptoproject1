import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function Newsfeed() {
    const[articles,setArticles]=useState(null);
    useEffect(()=>{

        

        const options = {
          method: 'GET',
          url: 'https://crypto-news-live3.p.rapidapi.com/news',
          headers: {
            'X-RapidAPI-Key': '53d30f0930mshf2124c1aed6b616p17911bjsnbb96ebd46b88',
            'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
          },
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    })
    console.log(articles)
    const listArticles=articles?.slice(0,7)
  return (
    <div className='news-feed'>
        <h2>Read More</h2>
        {listArticles?.map((article,_index)=>{

<div key={_index}>
    <a href={article.url}>
        <p>{article.title}</p>
    </a>

</div>;
        })}
    </div>
  );
}
