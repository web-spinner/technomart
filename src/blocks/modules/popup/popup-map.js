$(document).ready(function(){
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [59.939426422586656,30.316444163970882],
      zoom: getZoom(checkScreen()),
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

  const checkScreen = () => {
    let width = document.body.clientWidth;
    let screen; 
    if(width > 1079) screen = 'Desctop';
    if(width < 1080 && width > 767) screen = 'Tablet';  
    if(width < 768) screen = 'Mobile';
    return screen;
  }

  const getZoom = (screen) => {
    let center;
    switch(screen){
      case 'Desctop':
        zoom = 16;
        break;
      case 'Tablet':
        zoom = 15;
        break;
      case 'Mobile':
        zoom = 14;
        break;
      default:
        zoom = false;
        break;
    }
    return zoom;
  }

  let buttonOpen = $('#btn-open-map');
  let buttonClose = $('#btn-close-map');
  let popupMap = $('.popup-map');

  buttonClose.click(function(){
    popupMap.hide();
  });

  buttonOpen.click(function(){
    ymaps.ready(init);
    popupMap.show();
  });
});
