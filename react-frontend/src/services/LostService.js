import axios from 'axios';

const LOST_REST_API_URL = 'http://localhost:8080/api/itemonroads';

class LostService {
  async getLosts() {
    try {
      const response = await axios.get(LOST_REST_API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching lost items:', error);
      throw error;
    }
  }

  async createLost(lostItem) {
    try {
      const response = await axios.post(LOST_REST_API_URL, lostItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LostService();