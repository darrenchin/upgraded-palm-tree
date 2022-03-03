<template>
  <h3 :style="backgroundColor">{{ type }}</h3>
</template>

<script>
export default {
  name: "Type",
  props: {
    type: String,
  },
  data() {
    return {
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
  computed: {
    backgroundColor: function () {
      return "background-color: " + this.colors[`${this.type}`]; //colors[water]
    },
  },
};
</script>

<style scoped>
h3 {
  width: 23%;
  height: 6rem;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
}
</style>