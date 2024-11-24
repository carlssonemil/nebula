<template>
  <div class="beamsmasher container">
    <h3>Terminus Beamsmasher Equation Calculator</h3>
    <p>Simple cheat sheet to quickly validate the Beam Smasher equation step on Terminus Black Ops 6 Zombie map</p>
    <div class="results flex justify-center items-center gap-6">
      <div class="digit" id="digit1">-</div>
      <div class="digit" id="digit2">-</div>
      <div class="digit" id="digit3">-</div>
    </div>
    <div class="variable-sections">
      <h4>Select Variables</h4>
      <div class="variable-section">
        <h5>X:</h5>
        <div class="symbols">
          <img
            v-for="symbol in xSymbols"
            :key="symbol.value"
            :src="symbol.img"
            :alt="`Value ${symbol.value}`"
            :class="{ selected: xValue === symbol.value }"
            @click="selectVariable('x', symbol.value)"
          />
        </div>
      </div>
      <div class="variable-section">
        <h5>Y:</h5>
        <div class="symbols">
          <img
            v-for="symbol in ySymbols"
            :key="symbol.value"
            :src="symbol.img"
            :alt="`Value ${symbol.value}`"
            :class="{ selected: yValue === symbol.value }"
            @click="selectVariable('y', symbol.value)"
          />
        </div>
      </div>
      <div class="variable-section">
        <h5>Z:</h5>
        <div class="symbols">
          <img
            v-for="symbol in zSymbols"
            :key="symbol.value"
            :src="symbol.img"
            :alt="`Value ${symbol.value}`"
            :class="{ selected: zValue === symbol.value }"
            @click="selectVariable('z', symbol.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* **
  * Beamsmasher Calculator View
  * Credits to: @akavava_(https://x.com/arekus_) https://beamsmasher-calculator.fr/ 
*/
import symbol2 from "@/assets/beamsmasher/symbols-02.jpg";
import symbol3 from "@/assets/beamsmasher/symbols-03.jpg";
import symbol1 from "@/assets/beamsmasher/symbols-01.jpg";
import symbol4 from "@/assets/beamsmasher/symbols-04.jpg";
import symbol5 from "@/assets/beamsmasher/symbols-05.jpg";
import symbol6 from "@/assets/beamsmasher/symbols-06.jpg";

export default {
  data() {
    return {
      xValue: null,
      yValue: null,
      zValue: null,
      xSymbols: [
        { value: 0, img: symbol1 },
        { value: 10, img: symbol2 },
        { value: 11, img: symbol3 },
        { value: 20, img: symbol4 },
        { value: 21, img: symbol5 },
        { value: 22, img: symbol6 },
      ],
      ySymbols: [
        { value: 0, img: symbol1 },
        { value: 10, img: symbol2 },
        { value: 11, img: symbol3 },
        { value: 20, img: symbol4 },
        { value: 21, img: symbol5 },
        { value: 22, img: symbol6 },
      ],
      zSymbols: [
        { value: 0, img: symbol1 },
        { value: 10, img: symbol2 },
        { value: 11, img: symbol3 },
        { value: 20, img: symbol4 },
        { value: 21, img: symbol5 },
        { value: 22, img: symbol6 },
      ],
    };
  },
  watch: {
    // Watch variables for changes and trigger recalculation
    xValue: "calculateResults",
    yValue: "calculateResults",
    zValue: "calculateResults",
  },
  methods: {
    selectVariable(variable, value) {
      if (variable === "x") this.xValue = value;
      else if (variable === "y") this.yValue = value;
      else if (variable === "z") this.zValue = value;
    },
    calculateResults() {
      if (this.xValue !== null && this.yValue !== null && this.zValue !== null) {
        const result1 = this.xValue * 2 + 11;
        const result2 = this.zValue * 2 + this.yValue - 5;
        const result3 = Math.abs(this.zValue + this.yValue - this.xValue);

        this.updateDigits([result1, result2, result3]);
      }
    },
    updateDigits(values) {
      values.forEach((value, index) => {
        const digit = document.getElementById(`digit${index + 1}`);
        if (digit) {
          digit.textContent = value;
          digit.style.transform = "scale(1.1)";
          setTimeout(() => {
            digit.style.transform = "scale(1)";
          }, 150);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  color: var(--text-color);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.results {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.digit {
  background: var(--secondary-bg);
  color: var(--accent-color);
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
}

.variable-section {
  margin-bottom: 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.variable-section h5 {
  font-size: 1.5rem;
}

.symbols {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.symbols img {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: transform 0.2s, border-color 0.2s;
}

.symbols img:hover {
  transform: scale(1.1);
}

.symbols img.selected {
  border-color: greenyellow;
  border-width: 5px;
  transform: scale(1.1);
}
</style>
