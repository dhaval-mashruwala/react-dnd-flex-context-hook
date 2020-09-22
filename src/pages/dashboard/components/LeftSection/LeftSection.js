import React, { useContext, useState} from "react";
import Tweet from '../../components/Tweet';
import Loader from '../../components/Loader';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { GlobalContext } from '../../../../store'
// this is left section of application which contains search and tweets results
/* Render the component */
const LeftSection = () => {
  const [searchText, setSearchText] = useState('')
  const [error, setError] = useState({ emptyQuery: false })
  const [message, setMessage] = useState('')
  const [loading, setloading] = useState(false)
  const { tweets, fetchTweets } = useContext(GlobalContext);

  // this will be called when user hits seach and call to fetch tweets will be handled
const onSearch = async () => {
  if( searchText ) {
    setloading(true)
    await fetchTweets(searchText);
    error.emptyQuery = false;
    setError(error)
    setloading(false)
  } else {
    error.emptyQuery = true;
    setError(error)
    setMessage('search query cannot be empty')
  }
}

const _renderTweets = (tweets) => {
  return tweets.map((tweet, index)=>(
    <Draggable
      key={tweet.id}
      draggableId={String(tweet.id)}
      index={index}>
      {(provided, snapshot) => (
        <Tweet
          provided={provided} 
          photo={tweet.user && tweet.user.biggerProfileImageURL}
          name={tweet.user && tweet.user.name}
          screenName={tweet.user && tweet.user.screenName}
          text={tweet.text}
          date={tweet.createdAt}
        />
      )}
    </Draggable>
   ))
}

const _renderLoader = () => (
  <div className='loader-container'>
    <Loader></Loader>
    <Loader></Loader>
    <Loader></Loader>
    <Loader></Loader>
    <Loader></Loader>
  </div>
)

  return (
    <div className='left-section'>
      <div className='wrapper'>
      <div className='search-wrapper'>
        {error.emptyQuery && message && <span className='error'>{message}</span>}
        <input 
          className='search-box' 
          placeholder='Search Twitter' 
          type='text'
          onChange={(e)=>setSearchText(e.currentTarget.value)} 
          value={searchText}
        />
        <button className='search-btn' onClick={onSearch}>
          <i className='fa fa-search'></i>
        </button>
      </div>
      <Droppable droppableId="left-section">
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef}
          className='tweets-list-container'>
          {loading? _renderLoader() : null}
          {!loading && tweets.length ? _renderTweets(tweets): null}
          {provided.placeholder}
          {!loading && !tweets.length ? (
            <div className='no-tweets'>
              <span> You have no tweets. Try search for it.</span>
            </div>
            ):null}
        </div>
      )}
      </Droppable>
      </div>
    </div>
  );
}

export default LeftSection;