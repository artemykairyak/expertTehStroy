document.addEventListener('DOMContentLoaded', function() {
    var selector = '.header__content h1';

var content = {
    ekspertiza_remonta: [
        {
        selector: selector,
        content: 'Экспертиза ремонта в Москве. Судебные эксперты.'
        }
    ],
    ekspertiza_stroitelstva: [
        {
        selector: selector,
        content: 'Экспертиза строительства. Бесплатная консультация.'
        }
    ],
    ekspertiza_dlja_suda: [
        {
        selector: selector,
        content: 'Строительная экспертиза. Заключение для суда.'
        }
    ],
    ekspertiza_dokumentaci: [
        {
        selector: selector,
        content: 'Экспертиза строительной документации. Профессиональные сметчики.'
        }
    ],
    ekspertiza_doma: [
        {
        selector: selector,
        content: 'Экспертиза частных домов и коттеджей.'
        }
    ],
    ekspertiza_pomesheniy: [
        {
        selector: selector,
        content: 'Обследование помещений. Заказать экспертизу.Профессионально.'
        }
    ],
    ekspertiza_smet: [
        {
        selector: selector,
        content: 'Экспертиза сметной документации. Профессиональные сметчики.'
        }
    ],
    ekspertiza_zdamiy: [
        {
        selector: selector,
        content: 'Экспертиза зданий. Все допуски. Профессионально.'
        }
    ],
    tehnicheskaja_ekspertiza: [
        {
        selector: selector,
        content: 'Строительная экспертиза. Судебные эксперты.'
        }
    ],
    tehnicheskoe_obsledovanie_sooruzhenij: [
        {
        selector: selector,
        content: 'Техническое обследование зданий с выдачей заключения.'
        }
    ],
    ocenka_ushherba: [
        {
        selector: selector,
        content: 'Определение суммы ущерба квартиры'
        }
    ],
    pozhar: [
        {
        selector: selector,
        content: 'Определение суммы ущерба от пожара.'
        }
    ],
    zaliv: [
        {
        selector: selector,
        content: 'Определение суммы ущерба от залива квартиры.'
        }
    ],
    ekspertiza_dveri: [
        {
        selector: selector,
        content: 'Экспертиза дверей в Москве и области.'
        }
    ],
    ekspertiza_okon: [
        {
        selector: selector,
        content: 'Экспертиза пластиковых окон. Качественно. Профессионально.'
        }
    ],
    ekspertiza_sistem: [
        {
        selector: selector,
        content: 'Экспертиза вентиляции, отопления, волоснабжения, канализации.'
        }
    ]
};

// заменяет контент
function replacer(content, utm) {
    if (utm in content) {
        for (i in content[utm]) {
            if(document.querySelector(content[utm][i]['selector'])!=null) {document.querySelector(content[utm][i]['selector']).innerHTML=content[utm][i]['content'];};
        };
    }
};


// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// записывает utm в cookie на 30 дней
function setCookie(utm) {
    var date = new Date(new Date().getTime() + (30*24*60*60*1000));
    document.cookie = 'utm_replace=' + utm + '; path=/; expires=' + date.toUTCString();
};

// объединяет все функции в один алгоритм
function replacerMain(content) {
    // check is there utm in url
    if (/utm_replace=([^&]*)/g.exec(document.URL)) {
        var utm = /utm_replace=([^&]*)/g.exec(document.URL)[1];
        } else {
        var utm = null
    };

    if (utm != null) {
        replacer(content, utm);
        setCookie(utm);
    } else if (getCookie('utm_replace') != undefined) {
        replacer(content, getCookie('utm_replace'));
    } else {
        console.log('UTM replacer не нашел метку ни в URL, ни в cookie')
    };
};
replacerMain(content);
});