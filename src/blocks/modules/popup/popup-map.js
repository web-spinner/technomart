$(document).ready(function(){
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [59.939426422586656,30.316444163970882],
      zoom: 16,
      controls: ['zoomControl']
    })

    var myPlacemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {
      hintContent: '<p class="popup-map__hint">Большая Конюшенная ул, 19</p>'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [22, 43],
      iconImageOffset: [-3, -60]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  let buttonOpen = $('#btn-open-map');
  let buttonClose = $('#btn-close-map');
  let popupWrite = $('.popup-map');

  buttonClose.click(function(){
    popupWrite.hide();
  });

  buttonOpen.click(function(){
    popupWrite.show();
  });
});
