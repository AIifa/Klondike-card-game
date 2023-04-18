<script lang="ts">
import TemplateCard from './TemplateCard.vue'

export default {
  components: { TemplateCard },
  setup() {
    return {}
  }
}
</script>

<template>
  <div class="gameField"> А это игровое поле
    <!-- <div class="row"> -->
    <!--Это работает!!!
          <i class="bi bi-arrow-repeat"></i>-->

    <div v-for="n in 13" :key="n">
      <TemplateCard :name="`${n}`" />
    </div>
    <div v-for="n in 13" :key="n">
      <TemplateCard :name="`${n+13}`" />
    </div>
    <div v-for="n in 13" :key="n">
      <TemplateCard :name="`${n+26}`" />
    </div>
    <div v-for="n in 13" :key="n">
      <TemplateCard :name="`${n+39}`" />
    </div>
  </div>
</template>

<style lang="scss">
.gameField {
  color: rgb(114, 2, 118);
  background-color: rgb(71, 197, 94);
  width: 70%;
  border: rgb(214, 3, 3);
  border-style: solid;
  border-width: 1px;
  height: 50vw;
}
</style>
