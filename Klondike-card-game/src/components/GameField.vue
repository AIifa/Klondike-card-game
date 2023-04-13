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
  <div class="gameField">
    <div class="row">
      <!--Это работает!!!
      <i class="bi bi-arrow-repeat"></i>-->
      <div class="col">
        <TemplateCard />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
