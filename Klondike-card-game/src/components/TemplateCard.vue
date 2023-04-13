<script lang="ts">
import { reactive, ref } from 'vue'

export default {
  setup() {
    // Создать массив объектов для управление и создания шаблона карты
    // Возможно стоит передавать пропсы и из них делать карту, подгружая необходимые вещи?
    const numberCard = ref(Array.from({ length: 5 }, (value, index) => index + 1))

    function goStore(index: number) {
      const pos = numberCard.value.indexOf(index);
      numberCard.value[pos] 
    }
    return {
      goStore,
      numberCard
    }
  }
}
</script>

<template>
  <div v-for="index in numberCard" :key="index">
    <button type="button" class="btn btn-info" value="ThisIsCard" @click="goStore(index)">{{ index }}</button>
  </div>
</template>

<style scoped></style>
