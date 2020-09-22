import {fetchTweets as fetchTweetsApi, fetchBackupTweets} from '../api'

export const actions = {
  FETCH_TWEETS_SUCCESS: 'FETCH_TWEETS_SUCCESS',
  FETCH_TWEETS_ERROR: 'FETCH_TWEETS_ERROR',
  SET_SAVED_TWEET: 'SET_SAVED_TWEET',
  REMOVE_SAVED_TWEET: 'REMOVE_SAVED_TWEET'
}

export const fetchTweets = (dispatch) => {
  return async query => {
    try{
      const res = await fetchTweetsApi(query, 10);
      dispatch({
        type: actions.FETCH_TWEETS_SUCCESS,
        data:res.data
      });

    } catch(e){
      /* rest api is giving CORS error hence this is backup response if it gives CORS error */
      try {
        const res = await fetchBackupTweets();
        dispatch({
          type: actions.FETCH_TWEETS_SUCCESS,
          data:res.data
        });
      } catch(e) {
        dispatch({
          type: actions.FETCH_TWEETS_ERROR,
          error:e.toString()
        });
  
      }
    }
  }
}

export const setSavedTweets = (dispatch) => {
  return draggedTweet => {
    try{
      dispatch({
        type: actions.SET_SAVED_TWEET,
        data:draggedTweet
      });

    } catch(e){
      throw e;
    }
  }
}
export const removeSavedTweet = (dispatch) => {
  return tweetIndex => {
    try{
      dispatch({
        type: actions.REMOVE_SAVED_TWEET,
        data:tweetIndex
      });

    } catch(e){
      throw e;
    }
  }
}

