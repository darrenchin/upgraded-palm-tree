<template>
  <div class="pkmn-container">
    <h2>{{ index + 1 }}</h2>
    <h1 id="query">{{ pokemon.name }}</h1>
  </div>
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
div {
  background-color: red;
  color: white;
  height: 10rem;
  width: 22%;
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