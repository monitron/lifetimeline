import axios from 'axios'

const BASE_URL = "http://localhost:3000/events/"

export default {
  async getEvents() {
    const events = await axios.get(BASE_URL);
    return events.data;
  }
}