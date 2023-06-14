<script>

export default {
    name: 'projectCard',
    props: {
        project: Object
    }
}
</script>


<template>

<div class="card h-100">
  <div class="card-body">
    <h3 class="card-title text-center">{{project.titolo}}</h3>
    <p class="text-primary mt-4">
      <span v-if="project.type">{{ project.type.nome }}</span>
      <span v-else>Nessuna tipologia</span>
    </p>
  </div>
</div>

</template>


<style lang="scss" scoped>
</style>