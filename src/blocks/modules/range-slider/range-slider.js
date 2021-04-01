import noUiSlider from "nouislider/distribute/nouislider.js";

var rangeSlider = document.getElementById('noUiSlider');

noUiSlider.create(rangeSlider, {
      start: [20, 80],
      connect: true,
  range: {
            'min': 0,
            'max': 100
  }
});
