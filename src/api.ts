import axios from "axios";
import config from "./config.ts";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getProducts() {
    try {
      const response = await HTTP.get("");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getProduct(id) {
    try {
      const response = await HTTP.get(`/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
