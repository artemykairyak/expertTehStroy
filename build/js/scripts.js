function onInitSlider(){$(".documents__main-slide .table__item img").attr("src",$(".documents__nav .table__item:first img").attr("src")),$(".documents__main-slide .info__title").html($(".documents__nav .table__item:first .info__title").html()),$(".documents__main-slide .info__number").html($(".documents__nav .table__item:first .info__number").html()),$(".documents__main-slide .table__item a").attr("href",$(".documents__nav .table__item:first img").attr("src"))}function hideModal(e){e.animate({opacity:"0"},200,function(){e.removeClass("active"),$(".overlay").hide()})}function showModal(e){$(".overlay").show(),e.addClass("active"),e.animate({opacity:"1"},200)}function scrollTo(e){$padding=$(".header").css("padding-top"),$offset=$(e).offset().top-parseInt($padding)-15,$("html").animate({scrollTop:$offset},1e3),$(".mobile-header__burger").hasClass("active")&&($(".mobile-header__burger").removeClass("active"),$(".mobile-menu").removeClass("active"))}$(function(){$(".mobile-header__burger").on("click",function(){$(this).toggleClass("active"),$(".mobile-menu").toggleClass("active")}),$("#files").on("change",function(){switch(this.files.length.toString().slice(-1)){case"1":$(".files-counter").html("Выбран "+this.files.length+" файл");break;case"2":case"3":case"4":$(".files-counter").html("Выбрано "+this.files.length+" файла");break;default:$(".files-counter").html("Выбрано "+this.files.length+" файлов")}}),$(window).on("scroll",function(){$(".header__mobile-header").offset().top>0?$(".header__mobile-header").addClass("header__mobile-header_blue-bg"):$(".header__mobile-header").removeClass("header__mobile-header_blue-bg"),$(".header__top-menu").offset().top>0?$(".header__top-menu").addClass("header__top-menu_blue-bg"):$(".header__top-menu").removeClass("header__top-menu_blue-bg")}),$(".header__calculate-btn, .works__calculate-btn").on("click",function(e){scrollTo(".calculating"),e.preventDefault()}),$(".header .more-btn").on("click",function(){scrollTo(".services"),e.preventDefault()}),$(".services-item").on("click",function(e){scrollTo(".services"),e.preventDefault()}),$(".advantages-item").on("click",function(e){scrollTo(".advantages"),e.preventDefault()}),$(".deadlines-item").on("click",function(e){scrollTo(".deadlines"),e.preventDefault()}),$(".contacts-item").on("click",function(e){scrollTo(".contacts"),e.preventDefault()}),$(".works .table__item").on("mouseenter",function(){$(window).width()>996&&($(this).addClass("hover"),$(this).find(".item__info").fadeIn(300))}),$(".works .table__item").on("mouseleave",function(){$(window).width()>996&&($(this).find(".item__info").fadeOut(300),$(this).removeClass("hover"))}),$(".documents__nav .table__item img").on("click",function(){$(window).width()<680?($(".modal__document img").attr("src",$(this).attr("src")),showModal($(".modal__document"))):($img=$(this).attr("src"),$(".documents__main-slide .table__item img").fadeOut(200,function(){$(this).attr("src",$img)}),$(".documents__main-slide .table__item img").fadeIn(),$(".documents__main-slide .table__item a").attr("href",$img),$(".documents__main-slide .table__item .info__title").html($(this).parent().find(".info__title").html()),$(".documents__main-slide .table__item .info__number").html($(this).parent().find(".info__number").html()))}),$(".objects__slider").owlCarousel({navText:[$(".objects__slider-nav .slider-nav__prev"),$(".objects__slider-nav .slider-nav__next")],items:3,margin:30,nav:!0,dots:!1,loop:!1,lazyLoad:!0,responsive:{0:{items:1.3,margin:30},834:{items:2,margin:30},1240:{items:3,margin:30}}}),$(".documents__nav").owlCarousel({navText:[$(".documents__slider-nav .slider-nav__prev"),$(".documents__slider-nav .slider-nav__next")],margin:30,dots:!1,nav:!0,lazyLoad:!0,onInitialized:onInitSlider,responsive:{0:{items:1,margin:20},680:{items:2,margin:30},834:{items:2,margin:30},1240:{items:4,margin:30}}}),$(".overlay").on("click",function(){hideModal($(".modal"))}),$(".modal__close").on("click",function(){hideModal($(this).closest(".modal"))}),$(".footer__item .policy, .modal__policy-link, .questions-form__policy").on("click",function(e){showModal($(".modal__policy")),e.preventDefault()}),$(".write-btn").on("click",function(e){showModal($(".modal__mail")),e.preventDefault()}),$(".call-btn").on("click",function(e){showModal($(".modal__callback")),e.preventDefault()}),$(".works .item__info ul").each(function(){1===$(this).children().length&&$(this).parent().addClass("disable-marker")}),$(".works .item__head").on("click",function(){$(window).width()<996&&($(this).parent().toggleClass("hover"),$(this).parent().hasClass("hover")?$(this).parent().find(".item__info").fadeIn(300):$(this).parent().find(".item__info").fadeOut(300))}),$(".item__info .info__close").on("click",function(){$(this).closest(".table__item").removeClass("hover"),$(this).closest(".item__info").fadeOut(300)}),$(".location__close").on("click",function(){$(".contacts").removeClass("tablet-active"),$(".contacts").removeClass("mobile-active"),$(this).parent().removeClass("active")}),$(window).width()>996&&$(window).width()<1355?($(".contacts").addClass("tablet-active"),$(".contacts__location").removeClass("active")):$(window).width()<996?($(".contacts").addClass("mobile-active"),$(".contacts__location").removeClass("active")):($(".contacts").removeClass("tablet-active"),$(".contacts").removeClass("mobile-active")),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[55.87898495672535,37.63729452513122],zoom:16,controls:[]},{searchControlProvider:"yandex#search"}),t=ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout"></div></div>'),i=new ymaps.Placemark([55.87898495672535,37.63729452513122],{iconContent:"12"},{iconLayout:t,iconShape:{type:"Circle",coordinates:[0,0],radius:25},iconImageSize:[68,68],iconImageOffset:[-12,0]});e.geoObjects.add(i),e.behaviors.disable("scrollZoom"),e.container.fitToViewport(),$(window).width()<1280&&e.setCenter([55.88199005672535,37.63729452513122]),i.events.add("click",function(){$(window).width()>996&&$(window).width()<1355?$(".contacts").toggleClass("tablet-active"):$(window).width()<996?$(".contacts").toggleClass("mobile-active"):$(".contacts__location").toggleClass("active")})})});