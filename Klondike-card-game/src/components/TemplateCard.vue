<script lang="ts">
import { onMounted } from 'vue'

export default {
  props: {
    typeCard: String,
    nameCard: String,
    position: String
  },
  setup(props) {
    const backImageName = `../image/svg_playing_cards/backs/castle.svg`

    function backImage() { return new URL(backImageName, import.meta.url).href }

    function frontImage() {
      if (props.typeCard == "front")
        return new URL(`../image/svg_playing_cards/fronts/${props.nameCard}.svg`, import.meta.url).href
      else if (props.typeCard == "back")
        return new URL(backImage(), import.meta.url).href
    }

    onMounted(() => {
      // if (props.position) {
      //   console.log(props.position)
      //   document.body.style.setProperty('--position', props.position || null)
      // }
    })

    return {
      backImage,
      frontImage
    }
  }
}
</script>

<template>
  <div v-if="typeCard == 'empty'" class="emptyCard">
  </div>

  <div v-else-if="typeCard == 'back' && nameCard == undefined" class="back">
    <img :src=backImage() draggable="false">
  </div>
  <!-- Смена типа, ПОДУМоТЬ, вычисляемый классН? -->
  <div v-else class="card" v-draggable :style="{ bottom: Number(position) * 5 + 'vw' }">
    <img :src="frontImage()" draggable="false">
  </div>
</template>

<style lang="scss">
// Переменные css
// :root {

// }

.card {
  position: relative;
  bottom: var(--position) + 'px';
  width: 5vw;
  height: 11vh;
}

.emptyCard {
  width: 5vw;

  border: rgb(0, 0, 0);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(137, 214, 93, 0.2);

}

.back {
  width: 5vw;
  height: 11vh;
}

img {
  width: 5vw;
}
</style>
