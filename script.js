ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [54.193538, 37.616207],
    zoom: 16,
    controls: ["zoomControl"],
  });
  // Проспект Ленина, 86
  var myPlacemark1 = new ymaps.Placemark(
    [54.170006, 37.591315],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 86</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark1);

  // Проспект Ленина, 84
  var myPlacemark2 = new ymaps.Placemark(
    [54.172583, 37.594019],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 84</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark2);

  // Проспект Ленина, 95
  var myPlacemark3 = new ymaps.Placemark(
    [54.17272, 37.59604],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 95</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark3);

  // Проспект Ленина, 64
  var myPlacemark4 = new ymaps.Placemark(
    [54.180472, 37.602768],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 64</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark4);

  // Проспект Ленина, 67
  var myPlacemark5 = new ymaps.Placemark(
    [54.180578, 37.604547],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 67</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark5);

  // Проспект Ленина, 57
  var myPlacemark6 = new ymaps.Placemark(
    [54.183776, 37.607799],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 57</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark6);

  // Проспект Ленина, 24
  var myPlacemark7 = new ymaps.Placemark(
    [54.190104, 37.613772],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 24</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark7);

  // Проспект Ленина, 94
  var myPlacemark8 = new ymaps.Placemark(
    [54.165821, 37.586024],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Проспект Ленина, 94</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark8);

  // 9 Мая, 1
  var myPlacemark9 = new ymaps.Placemark(
    [54.164097, 37.585476],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">9 Мая, 1</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark9);

  // Октябрьская, 25
  var myPlacemark10 = new ymaps.Placemark(
    [54.208791, 37.620878],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Октябрьская, 25</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark10);

  // Комсомольская, 3
  var myPlacemark11 = new ymaps.Placemark(
    [54.206663, 37.609272],
    {
      balloonContent:
        '<div class="ballon"><div class="balloon_adres">Комсомольская, 3</div></div>',
    },
    {
      preset: "islands#nightDotIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark11);
}
