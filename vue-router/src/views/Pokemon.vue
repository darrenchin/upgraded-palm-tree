<template>
  <div class="poke-card">
    <h2 class="card-name">{{ PokemonData.name }}</h2>
    <ul class="card-image-list">
      <img class="card-image" :src="spriteFront" alt="" />
      <img class="card-image" :src="spriteBack" alt="" />
      <img class="card-image" :src="spriteShinyFront" alt="" />
      <img class="card-image" :src="spriteShinyBack" alt="" />
    </ul>
    <ul class="types">
      <Type
        v-for="type in PokemonData.types"
        :key="type"
        :type="type.type.name"
      />
    </ul>
    <ul class="poke-stats">
      <li v-for="stat in PokemonData.stats" :key="stat" class="poke-stat">
        <div :style="backgroundColor">{{ stat.stat.name }}</div>
        <div :style="backgroundColor">{{ stat.base_stat }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Type from "../components/Type.vue";
export default {
  components: {
    Type,
  },
  data() {
    return {
      PokemonData: {},
      colors: {
        fire: "#FD7D24",
        grass: "#9BCC50",
        electric: "#EED535",
        water: "#4592C4",
        ground: "#A38C21",
        rock: "#A38C21",
        fairy: "#FDB9E9",
        poison: "#B97FC9",
        ghost: "#B97FC9",
        bug: "#729F3F",
        dragon: "#7766EE",
        psychic: "#F366B9",
        flying: "#BDB9B8",
        fighting: "#D56723",
        normal: "#999",
        ice: "#51C4E7",
        steel: "#AAAABB",
        dark: "#775544",
      },
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
  computed: {
    spriteFront: function () {
      return `${this.PokemonData.sprites.front_default}`;
    },
    spriteBack: function () {
      return `${this.PokemonData.sprites.back_default}`;
    },
    spriteShinyFront: function () {
      return `${this.PokemonData.sprites.front_shiny}`;
    },
    spriteShinyBack: function () {
      return `${this.PokemonData.sprites.back_shiny}`;
    },
    backgroundColor: function () {
      return (
        "background-color: " +
        this.colors[`${this.PokemonData.types[0].type.name}`]
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>