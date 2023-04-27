<script lang="ts">
import TemplateCard from './TemplateCard.vue'
import { ref } from 'vue'
// Сгенерировать 8 пачек карт с установкой позиции на поле
// 5 пустых позиций
// 13 мест для установки


// 1
// Реализация столбцов карт:
// каждый столбец - блок с относительным позиционированием внутри, отрисовка через список компонента
// при нажатии на общий блок, берется нужный элемент и производятся действия, ...
// возможно нужен будет teleport для перемещения карт в правильной логике

// 2
// Добавить звук с джокерами, кек момент

// 3
// Нажатие на рубашку склада, достает очередную карту от туда 
export default {
  components: { TemplateCard },
  setup() {
    let listDistributionCard = ref<number[]>([]);
    let listGameCard = ref<number[]>([]);
    let isStart = ref<boolean>(false);

    function shuffle(array: Array<number>) {
      array.sort(() => Math.random() - 0.5);
    }

    function randomSortCards() {
      const randomListCards = Array.from({ length: 52 }, (_, i) => i + 1);
      shuffle(randomListCards);
      shuffle(randomListCards);

      const indexSlice = 24;

      listDistributionCard.value = randomListCards.splice(0, indexSlice);
      listGameCard.value = randomListCards;

      console.log(listDistributionCard.value);
      console.log(listGameCard.value);
    }

    function start() {
      randomSortCards();
      isStart.value = true;

      console.log("start " + isStart.value);
    }

    function lastCard(col: number, row: number) {
      if (col != row) {
        return "back"
      }
      else {
        return "front"
      }
    }

    let nextCard = ref<number>(-1)
    function getCard() {
      console.log("work")
      // nextCard.value = listDistributionCard.value.pop() !== undefined ? listDistributinCard.value.pop() : -1;
      
      console.log(nextCard)
    }

    return {
      listDistributionCard,
      listGameCard,
      isStart,
      nextCard,
      start,
      lastCard,
      getCard
    }
  }
}
</script>

<template>
  <div class="container gameField"> А это игровое поле
    <!-- Кнопка начала игры -->
    <div class="row justify-content-end">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="start">
          <i class="bi bi-play-fill" /> Start
        </button>
      </div>

      <!-- Выдача карт -->
      <div class="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto" @click="getCard()">
        <TemplateCard :typeCard="'back'" />
      </div>
      <div class="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto">
        <TemplateCard :typeCard="'empty'" :nameCard="`${listGameCard[nextCard]}`" />
      </div>

      <!-- 4 Поля сбора карт -->
      <div class="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto" v-for="n in 4" :key="n">
        <TemplateCard :typeCard="'empty'" />
      </div>
    </div>

    <!-- 7 игровых полей  -->
    <div v-if="isStart" class="row justify-content-end">
      <div v-for="n in 7" :key="n" class="col-auto ">
        <div v-for="j in n" :key="j">
          <TemplateCard :typeCard="lastCard(n, j)" :nameCard="`${listGameCard[n / 2 * (n - 1) + j - 1]}`"
            :position="`${j - 1}`" />
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.gameField {
  margin: 0 auto;
  color: rgb(0, 42, 255);
  background-color: rgba(49, 137, 56, 0.65);
  width: 70%;
  border: rgb(214, 3, 3);
  border-style: solid;
  border-width: 1px;
  height: 50vw;
}
</style>
