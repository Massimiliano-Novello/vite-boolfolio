<script>

export default {
    name: 'projectCard',
    props: {
        project: Object
    }
}
</script>


<template>

<div class="card">
  <div class="card-body">
    <h3 class="card-title">{{project.titolo}}</h3>
  </div>
</div>

</template>


<style lang="scss" scoped>
</style>