<template>
  <router-link to="/Test" class="router-link">
    <div class="pkmn-container">
      <h2>{{ index + 1 }}</h2>
      <h1 id="query">{{ pokemon.name }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    pokemon: Object,
    index: Number,
  },
};
</script>

<style  scoped>
.router-link,
.router-link:visited,
.router-link:link {
  width: 22%;
  text-decoration: none;
  background-color: red;
  color: white;
  margin: 1rem;
  padding: 1rem 1rem;
  border-radius: 10px;
}
h1 {
  text-transform: uppercase;
  font-size: var(--h3);
}
h2 {
  font-size: var(--h4);
}
</style>