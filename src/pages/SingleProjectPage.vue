<script>
import axios from 'axios';
export default {
    name: 'SingleProjectPage',
    data () {
      return {
        project: [],
      }
    },
    mounted() {
      const slug = this.$route.params.slug
      axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then(resp => {
        console.log(resp);
        this.project = resp.data.results
      })
    }
}

</script>

<template>
<div class="container">
    <h2>{{ project.titolo }}</h2>
    <p class="mt-3">{{ project.descrizione }}</p>
</div>

</template>


<style lang="scss" scoped>
</style>