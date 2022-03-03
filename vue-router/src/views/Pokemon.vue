<template>
  <div class="poke-card">
    <h2>{{ PokemonData.name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PokemonData: {},
    };
  },
  beforeMount: function () {
    this.fetchData();
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
        );

        const data = await response.json();
        this.PokemonData = data;

        return this.PokemonData;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>