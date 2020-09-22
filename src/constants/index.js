export const endpoints = {
    FETCH_TWEETS: (query, limit) => {
        return `https://tweetsaver.herokuapp.com/?q=${query}&count=${limit}`;
    }
}