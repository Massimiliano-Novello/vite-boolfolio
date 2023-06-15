<script>
import axios from "axios";
import projectCard from "../components/projectCard.vue";

export default {
    name: "ProjectPage",
  components: {
    projectCard,
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null,
    };
  },

  mounted() {
    this.getProject();
  },

  methods: {
    getProject(pageNumber = 1) {
      axios.get("http://127.0.0.1:8000/api/projects", {
        params: {
          page: pageNumber
        }
      }).then((resp) => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
      });
    },
  },
};
</script>

<template>
    <div class="container">
      <h1 class="text-center">I mie progetti</h1>
  
      <div class="row row-cols-4">
        <div class="col g-3" v-for="project in projects" :key="project.id">
          <projectCard :project="project" />
        </div>
      </div>
  
      <nav aria-label="Page navigation example" class=" mt-3">
        <ul class="pagination">
          <li :class="{'disabled' : currentPage === 1}" class="page-item"><a  @click.prevent="getProject(currentPage - 1)" class="page-link" href="#">Previous</a></li>
          <li v-for="item in lastPage" class="page-item"><a  @click.prevent="getProject(item)" class="page-link" href="#">{{ item }}</a></li>
          <li :class="{'disabled' : currentPage === lastPage}" class="page-item"><a  @click.prevent="getProject(currentPage + 1)" class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
</template>

<style lang="scss">
</style>