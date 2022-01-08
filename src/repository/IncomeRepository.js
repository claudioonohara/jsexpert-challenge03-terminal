import http from "http";

const API_BASE_URL = "http://localhost:3000";

class IncomeRepository {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      http.get(url, (response) => {
        response.on("data", (data) => resolve(JSON.parse(data)));
        response.on("error", reject);
      });
    });
  }

  async getConversions() {
    const fullURL = `${API_BASE_URL}/convert`
    const converionValues = await this.makeRequest(fullURL)
    return converionValues.results;
  }
}

export default IncomeRepository;
