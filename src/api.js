import axios from 'axios'

const BASE_URL = "http://localhost:3000/"

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