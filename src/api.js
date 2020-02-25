import axios from 'axios'

const BASE_URL = "http://localhost:3000/"
// To demo without the backend running locally:
// const BASE_URL = "https://my-json-server.typicode.com/monitron/lifetimeline/"

export default {
  async getEvents() {
    const events = await axios.get(BASE_URL + 'events/');
    return events.data;
  },

  async getStories() {
    const stories = await axios.get(BASE_URL + 'stories/');
    return stories.data;
  }
}