import noUiSlider from "nouislider/distribute/nouislider.js";

const rangeSlider = document.getElementById('noUiSlider');
const priceMinInput = document.querySelector('#price-min-input');
const priceMaxInput = document.querySelector('#price-max-input');
const priceMinBox = document.querySelector('#price-min-box');
const priceMaxBox = document.querySelector('#price-max-box');
const min = +priceMinInput.getAttribute('data-min');
const max = +priceMaxInput.getAttribute('data-max');
const startMin = +priceMinInput.getAttribute('data-start');
const startMax = +priceMaxInput.getAttribute('data-start');

noUiSlider.create(rangeSlider, {
      start: [startMin, startMax],
      connect: true,
  range: {
            'min': [min],
            'max': [max]
  },
  format: {
    to: function(value){
      return Math.round(value);
    },
    from: function(value){
      return Number(value);
    }
  }
});

rangeSlider.noUiSlider.on('update', function(values){
  let min = values[0];
  let max = values[1];

  priceMinBox.textContent = min;
  priceMaxBox.textContent = max;
  priceMinInput.value = min;
  priceMaxInput.value = max;

})
