$(function(){
	$('.mobile-header__burger').on('click', function() {
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	});

	$(window).on('scroll', function() {
		if($('.header__mobile-header').offset().top > 0) {
			$('.header__mobile-header').addClass('header__mobile-header_blue-bg');
		} else {
			$('.header__mobile-header').removeClass('header__mobile-header_blue-bg');
		}
		if($('.header__top-menu').offset().top > 0) {
			$('.header__top-menu').addClass('header__top-menu_blue-bg');
		} else {
			$('.header__top-menu').removeClass('header__top-menu_blue-bg');
		}
		

	});

		$('.header__calculate-btn, .works__calculate-btn').on('click', function(e) {
			$('html').animate({ 
	            scrollTop: $('.calculating').offset().top
	        }, 1000);
        	e.preventDefault();
	});
	

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
				items: 1.4,
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
		margin: 30,
		dots: false,
		nav: true,
		onInitialized : onInitSlider,
		responsive: {
			0: {
				items: 2,
				margin: 30
			},

			1240: {
				items: 4,
				margin: 30
			}
		}
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

			BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="contacts__location">' +
			'<h2 class="location__title">Мы находимся в Москве</h2>'	+
			'<p class="location__worktime">Работаем с 9:00 до 22:00 <span>без выходных</span></p>' +
			'<p class="location__phone">+7 000 000 00 00</p>' +
			'<p class="location__phone">example@example.ru</p>' +
			'<p class="location__address">г. Москва, ул. Москва, д.1</p></div>'
            
            )

			
        

        var myPlacemark = new ymaps.Placemark([55.760851099950635, 37.75161043981168], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/assets/img/icons/location.png',
            // Размеры метки.
            iconImageSize: [68, 68],
            iconImageOffset: [-12, 0],
             balloonContentLayout: BalloonContentLayout,
			});

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
	});
});