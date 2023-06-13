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
  </div>
</div>

</template>


<style lang="scss" scoped>
</style>