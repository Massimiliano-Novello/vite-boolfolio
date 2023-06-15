<script>
export default {
  name: 'HeaderApp',
  data () {
    return {
      menu: [
        {
          label: 'Home',
          routeName: 'home'
        },
        {
          label: 'Project',
          routeName: 'project'
        }
      ]
    }
  }
}
</script>


<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boolfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(item, index) in menu" :key="index" class="nav-item">
          <router-link  :to="{ name: item.routeName}" class="nav-link active" aria-current="page" href="#">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<style lang="scss" scoped>
</style>