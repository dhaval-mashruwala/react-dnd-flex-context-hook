import React, {useContext} from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import { GlobalContext } from '../../store'
import components from './components';
const { Header, LeftSection, RightSection } = components;

const Dashboard = () => {
  const { tweets, setSavedTweets } = useContext(GlobalContext);
  
  const getDraggedTweet = (draggedTweetId) => {
    return tweets.find((tweet)=>(String(tweet.id) === String(draggedTweetId)));
  }
  
  const onDragEnd = result => {
    try {
      const { destination, draggableId } = result;
      // if dropable is invalid
      if (!destination) {
        return;
      }
      if(destination.droppableId === 'right-section' && draggableId){
        let draggedTweet = getDraggedTweet(draggableId);
        if( draggedTweet ) {
          setSavedTweets( draggedTweet );
        }
      }
    } catch (e) {
      console.log('Something went wrong',e);
    }
  }
  
  return (
    <div className='container'>
      <Header></Header>
      <div className='tweet-container'>
      <DragDropContext onDragEnd={onDragEnd}>
        <LeftSection />
        <div className='drag-arrow-container'>
          <span>Drag tweet</span>
          <i className='fa fa-arrow-right arrow-right'></i>
          <span>To save</span>
        </div>
        <RightSection />
      </DragDropContext>
        
      </div>
    </div>
  );
}
export default Dashboard;
