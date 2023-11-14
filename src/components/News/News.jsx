import React from 'react';
import {NewsList} from './NewsList';

const News = () => {
  const firstNews = NewsList.slice(0, 1);
  const secondNews = NewsList.slice(1, 3);

  return (
    <div className='news'>
      <h3> LATEST NEWS </h3>

      <div className='news-cont'>
        {firstNews.map((news, index) => (
          <div key={index} className='pri-news'>
            <div className='pri-news-cont'>
              <h4> {news.title} </h4>
              <p> {news.description} </p>
              <a href='/news'>READ MORE</a>
            </div>
            <div className='pri-news-img-cont'>
              <img src={news.image} alt={news.title} />
            </div>
          </div>
        ))}

        <div className='other-news'>
          {secondNews.map((news, index) => (
            <div key={index} className='card-layout'>
              <div className='other-news-img-cont'>
                <img src={news.image} alt={news.title} />
              </div>
              <div className='other-news-cont'>
                <h4> {news.title} </h4>
                <p> {news.description.slice(0, 100)}... </p>
                <a href='/news'>READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
