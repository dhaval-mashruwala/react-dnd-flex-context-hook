import React, { useContext } from "react";
import Tweet from '../../components/Tweet';
import { Droppable } from 'react-beautiful-dnd';
import { GlobalContext } from '../../../../store'

// this is right section component which contains saved tweets
const RightSection = () => {
  const { savedTweets, removeSavedTweet } = useContext(GlobalContext);
  
  const _renderTweets = (savedTweets) => {
    return savedTweets.map((tweet, index)=>(
      <Tweet
        key={tweet.id}
        photo={tweet.user && tweet.user.biggerProfileImageURL}
        name={tweet.user && tweet.user.name}
        screenName={tweet.user && tweet.user.screenName}
        text={tweet.text}
        date={tweet.createdAt}
        isRemovable={true}
        removeSavedTweet={removeSavedTweet.bind(this, index)}
      />
     ));
  }

  return (
    <div className='right-section'>
      <div className='wrapper'>
      <div className='empty-container'>
        
      </div>
      <Droppable droppableId="right-section">
      {(provided, snapshot) => (
        <div 
        ref={provided.innerRef}
        className='tweets-list-container'
        >
        {savedTweets.length ? _renderTweets(savedTweets): null}
        {provided.placeholder}
        {!savedTweets.length ? (
          <div className='no-tweets'>
            <span> You have no saved tweets</span>
          </div>
          ):null}
        </div>
      )}
      </Droppable>
      </div>
    </div>
  );
}
export default RightSection;
