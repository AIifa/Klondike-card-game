<script lang="ts">
import { reactive, ref, computed } from 'vue'

export default {
  props: {
    name: String
  },
  setup(props) {
    // Создать массив объектов для управление и создания шаблона карты
    // Возможно стоит передавать пропсы и из них делать карту, подгружая необходимые вещи?
    // const numberCard = ref(Array.from({ length: 4 }, (value, index) => index + 1))
    // console.log(props.name)
    // function goStore(index: number) {
    //   const pos = numberCard.value.indexOf(index);
    //   numberCard.value[pos]
    // }

    function imgName() {
      return new URL(`../image/PNG-cards-1.3/${props.name}.png`, import.meta.url).href
    }

    return {
      // goStore,
      // numberCard
      imgName
    }
  }
}
</script>

<template>
  <!-- <div v-for="index in numberCard" :key="index">
        <button type="button" class="btn btn-info" value="ThisIsCard" @click="goStore(index)">{{ index }}</button>
      </div> -->
  <div class="card" v-draggable>
    <img :src="imgName()" draggable="false">
  </div>
</template>

<style lang="scss">
.card {

  height: 10px;
  width: 6vw;
  background-size: 50%;
}
</style>
