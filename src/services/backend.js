import axios from "axios";

export default {
  search(query) {
    return axios.get(
        query.from && query.to
        ? `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${query.query}&page=${query.page}&from=${query.from}&to=${query.to}` :
      query.from
        ? `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${query.query}&page=${query.page}&from=${query.from}`
        : query.to
        ? `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${query.query}&page=${query.page}&from=${query.to}`
        : `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${query.query}&page=${query.page}`
    );
  },
};
