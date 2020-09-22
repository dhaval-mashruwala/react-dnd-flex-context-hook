import axios from 'axios';
import {endpoints} from '../constants';

export const fetchTweets = (query, limit) => {
  // return axios.get(endpoints.FETCH_TWEETS(query, limit));
  return axios.get('./response.json');
}

export const fetchBackupTweets = () => {
  return axios.get('./response.json');
}
