import React from "react";
import PropTypes from 'prop-types';
import moment from 'moment';

// this is common tweet component which is used in both left and right section
const Tweet = ({...props}) => {
    const {
        provided = {}, 
        photo,
        name, 
        screenName, 
        text, 
        date, 
        isRemovable,
        removeSavedTweet
    } = props;
    return (
    <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps} 
    className='tweet'
    >
        <div className='profile-container'>
            <img className='profile' src={photo} alt='display profile'/>
        </div>
        <div className='info-container'>
            <div className='name-tweet-container'>
                <div className='name'>
                    <span className='full-name'>{name}</span>
                    <span className='screen-name'>{'@'+screenName}</span>
                </div>
                <div className='text'>
                    {text}
                </div>
            </div>
            <div className='date-container'>
            <span>
                {moment(date).format('Do MMM, YY hh:mm a')}
            </span>
            </div>
        </div>
        {isRemovable ? (
            <div className='remove-container' onClick={removeSavedTweet}>
                <i className='fa fa-close close'></i>
            </div>
        ):null}
    </div>
   )};

Tweet.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    screenName: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    isRemovable: PropTypes.bool,
    provided: PropTypes.object,
    removeSavedTweet: PropTypes.func
};
export default Tweet;