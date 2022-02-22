<template>
  <div class="search-header d-flex flex-column align-items-center justify-content-center">
    <b-input-group class="w-50 py-3">
      <template #append>
        <b-input-group-text>
          <div class="d-flex">
            <b-button @click="$emit('search')" variant="transparent">Search</b-button>
            <b-button @click="filter = true" variant="transparent">Filter</b-button>
          </div>
        </b-input-group-text>
      </template>
    <b-input v-model="query" @input="$emit('updateValue', query)" />
    </b-input-group>

    <b-input-group class="justify-content-center d-flex" v-if="filter">
      <b-row>
        <b-col>
          <label class="text-white">From</label>
          <b-input @change="$emit('updateFrom', from)" type="date" v-model="from"/>
          </b-col>
        <b-col> 
          <label class="text-white">To</label>
          <b-input @change="$emit('updateTo', to)" type="date" v-model="to"/>
          </b-col>
        </b-row>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      query: null,
      filter: false,
      from: null,
      to: null,
    }
  },

  methods: {

  }
}
</script>

<style lang="scss">
  .search-header {
    height: 150px;
    background-color: black;

    .input-group-text {
      background-color: white;
      border-left: none;
    }
  }
</style>