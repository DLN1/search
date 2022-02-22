<template>
  <div class="">
    <search-bar
      @updateValue="update"
      @updateFrom="updateFrom"
      @updateTo="updateTo"
      @search="search"
    />
    <b-row class="justify-content-center">
      <b-col cols="8">
        <div
          v-if="loading"
          class="vh-100 mt-5"
        >
          <b-spinner>Loading...</b-spinner>
        </div>
        <results
          v-else
          :result_data="result_data"
        />
        <div
          v-if="no_results"
          class="vh-100 mt-5"
        >No results.</div>
      </b-col>
    </b-row>
    <div v-if="result_data && result_data.totalPages > 1">
      <b-button
        class="rounded-circle mx-1 mt-3 mb-5"
        variant="primary"
        v-for="page, idx in result_data.totalPages"
        :key="idx"
        @click="next(idx + 1)"
      >{{idx + 1}}</b-button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Results from "@/components/Results.vue";
import backend from "@/services/backend.js";

export default {
  name: "Home",
  components: {
    SearchBar,
    Results,
  },
  data: () => {
    return {
      loading: false,
      result_data: null,
      query: null,
      no_results: false,
      currentPage: 1,
      from: null,
      to: null,
    };
  },


  methods: {
    update(e) {
      this.query = e;
    },
    updateFrom(e) {
      this.from = e
      this.search()
    },
    updateTo(e) {
      this.to = e
      this.search()
    },
    next(idx) {
      this.currentPage = idx;
      this.search();
    },
    async search() {
      try {
        this.loading = true;
        this.result_data = (
          await backend.search({ query: this.query, page: this.currentPage, from: this.from, to: this.to})
        ).data;

      } catch (e) {
        console.log(e);
      } finally {
        if (this.result_data.results.length == 0) {
          this.no_results = true;
        } else {
          this.no_results = false;
        }
        this.loading = false;
      }
    },
  },
};
</script>
