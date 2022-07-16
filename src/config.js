import axios from "axios";

const key = "AIzaSyBLo9CQLAZyT9gUbf2Y-S0KXhW0PFGQpXo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 100,
        key,
    },
});
