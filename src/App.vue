<script>
import axios from 'axios';
import projectCard from './components/projectCard.vue';
import ProjectCard from './components/projectCard.vue';

export default {
  components: {
    projectCard,
},
  data () {
    return {
      projects: []
    }
  },

  mounted() {
    this.getProject();
  },

  methods: {
    getProject() {
      axios.get("http://127.0.0.1:8000/api/projects").then(resp => {
        this.projects = resp.data.results;
      });
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">I mie progetti</h1>

    <div class="row row-cols-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <projectCard  :project="project"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @use "./style/general.scss" as *;
</style>
