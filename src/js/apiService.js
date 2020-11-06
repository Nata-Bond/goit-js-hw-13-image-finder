export default {
  query: "",
  page: 1,
  apiKey: "19012539-7c0dd5e15fe1ddd8f8e676462",

  async toGetFetch() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`;
    let response = await fetch(url);
    let result = await response.json();

    return result.hits;
  },

  resetPage() {
    return (this.page = 1);
  },

  setPage() {
    return (this.page += 1);
  },
};
