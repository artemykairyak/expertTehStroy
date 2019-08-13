# gulpBuild
gulp build for Asap

Необходимые пакеты на ПК: Node.js - https://nodejs.org/en/

Быстрый старт: 
Клонируем проект к себе в папку - git clone https://github.com/asapadmin/gulpBuild
В консоле пишем :
1. npm i
2. npm i gulp -g
3. gulp

ВНИМАНИЕ!!! все файлы в html подключаются от по пути от папки build
Папка src - папка рабочая область

Старт нового проекта с предустановленным gulp:

Либо опять клонируем проект с репозитория и переходим к шагу 3, либо - 
1. Копируем в новый проект package.json
2. Создаем папку src в корне, а в ней папки для работы с вашими файлами:
    1. sass
    2. js
    3. fonts
    4. img
    5. vendors
    6. Ваш index.html
    !!!Внимание это обязательная структура для работы
3. Вводим команду npm i
4. gulp
Сборка нового проекта завершена

Существующие команды:
gulp build - собирает все файлы проекта в папку билд сжимает их <br>
gulp clean - удаляет папку build <br>
gulp webserver - запускает вебсервер с livereload <br>
gulp buildSass - билдит .css в папку нашей работы области в 1 файл в разжатом виде <br>
gulp buildCss - билдит .css в сжатом виде в папку build/css и выполняет buildSass <br>
gulp buildJs - сжимает .js файлы и билдит их в 1 файл в папку build/js <br>
gulp vendors - перекидывает папку vendors(папка для файлов плагинов) в исходном состояние в папку build <br>
gulp imgmin - минифицирует картинки и закидывает их в build/img <br>
gulp buildFonts - перекидывает шрифты в build/fonts <br>
gulp buildHtml - перекидывает все .html файлы в папку build <br>
gulp - ВНИМАНИЕ! выполняет все вышеперечисленные команды за исключением  gulp clean 
