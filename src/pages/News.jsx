import React from 'react'
import { NewsList } from '../components/News/NewsList';
import { EventsList } from '../components/News/EventsList';

const News = () => {
  return (
    <div className='news-page' >

      <div className='news-content'>
        <h1 id='news'>News</h1>

        <div className='news-list'>
          {
            NewsList.map((news, index) => (
              <div key={index} className="news-card" >
                <div className='image-content'>
                  <img src={news.image} alt="" />
                </div>
                <div className='text-content'>
                  <h2>{news.title}</h2>
                  <p>{news.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='events-content'>
        <h3 id='events'>Events</h3>

        <div className='events-list'>
          {
            EventsList.map((event, index) => (
              <div key={index} className="event-card" >
                <div className='image-content'>
                  <img src={event.image} alt="" />
                </div>
                <div className='text-content'>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default News;
