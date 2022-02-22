<template>
  <b-container>
    <b-row
      class="mt-3"
      v-if="result_data"
    >
      <b-col
        cols="12"
        v-for="result,idx in result_data.results"
        :key="idx"
      >
        <b-card class="shadow-lg p-2 my-2">
          <b-row class="align-items-center d-flex">
            <b-col
              cols="12"
              lg="3"
            >
              <b-img
                class="object-fit-cover mb-3 mb-lg-0"
                width="100%"
                height="60"
                v-if="result.thumbnailURL"
                :src="'https://support.infocaption.com/' + result.thumbnailURL"
              />
            </b-col>
            <b-col
            @click="card_clicked(result.fullURL)"
              cols="9"
              class="text-start d-flex flex-column justify-content-between"
            >
              <h4
                class="mb-0"
                v-if="result.name"
                v-html="result.name"
              ></h4>
              <p
                class="mb-0 py-2"
                v-if="result.summary"
                v-html="result.summary"
              ></p>
              <p
                class="text-secondary mb-0"
                v-if="result.publicationDate"
                v-html="result.publicationDate"
              ></p>
            </b-col>
          </b-row>
          <div class="d-flex justify-content-end mb-2 text-gray">
            <b-button @click="URL_clicked(result.fullURL)" variant="trasparent py-0">URL</b-button>
            <b-button @click="email_clicked(result.fullURL)" variant="trasparent py-0">EMAIL</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["result_data"],
  data: () => {
      return {
          copied: false,
      }
  },

  methods: {
      card_clicked(url) {
          console.log(url)
          window.open(url)
      },
      email_clicked(res) {
          console.log(res)
          navigator.share({url: res})
      },
      URL_clicked(url) {
          this.copied = true
          navigator.clipboard.writeText(url);
      }
  }
};

</script>

