<script>
import axios from 'axios';

export default {
  data () {
    return {
      project: []
    }
  },

  mounted() {
    this.getProject();
  },

  methods: {
    getProject() {
      axios.get("http://127.0.0.1:8000/api/projects").then(resp => {
        this.project = resp.data.results;
      });
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>I mie progetti</h1>

    <div class="row row-cols-4">
      <div class="col">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @use "./style/general.scss" as *;
</style>
