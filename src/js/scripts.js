$(function(){
	$('.works .table__item').on('mouseenter', function(e) {
		$(this).addClass('hover');
		$(this).find('.item__info').fadeIn(300);
	});

	$('.works .table__item').on('mouseleave', function(e) {
		$(this).find('.item__info').fadeOut(300);		
		$(this).removeClass('hover');
	});

 	$('.documents__nav .table__item img').on('click', function(e) {
 		
 		$img = $(this).attr('src');
 		$('.documents__main-slide .table__item img').fadeOut(200, function() {
 			$(this).attr('src', $img);
 		});
 		$('.documents__main-slide .table__item img').fadeIn();
 		
 	});

	$('.objects__slider').owlCarousel({
		navText: [$('.objects__slider-nav .slider-nav__prev'), $('.objects__slider-nav .slider-nav__next')],
		items: 3,
		margin: 30,
		nav: true,
		dots: false,
		loop: false,
		lazyLoad: true,
		responsive: {
			0: {
				items: 2,
				margin: 30
			},

			1240: {
				items: 3,
				margin: 30
			}
		}
	});


	$('.documents__nav').owlCarousel({
		navText: [$('.documents__slider-nav .slider-nav__prev'), $('.documents__slider-nav .slider-nav__next')],
		items: 4,
		margin: 20,
		dots: false,
		nav: true,
		onInitialized : onInitSlider
	});

	function onInitSlider () {
		$('.documents__main-slide .table__item img').attr('src', $('.documents__nav .table__item:first img').attr('src'));
	}

		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.76063180708024,37.74575785974119],
				zoom: 16,
				controls: []

			}, {
				searchControlProvider: 'yandex#search'
			}),        

			myPlacemark = new ymaps.Placemark([55.760851099950635, 37.75161043981168], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/location.png',
            // Размеры метки.
            iconImageSize: [68, 68],
            iconImageOffset: [-12, 0]
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
        })

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
		});
	
});