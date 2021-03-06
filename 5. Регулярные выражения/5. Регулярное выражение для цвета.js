/* Задание 5

Регулярное выражение для цвета

Напишите регулярное выражение для поиска HTML-цвета, заданного как #ABCDEF, то есть # и содержит затем 6 шестнадцатеричных символов.

Пример использования:

var re = /*...ваше регулярное выражение...*/

var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"

alert( str.match(re) )  // #121212,#AA00ef

https://learn.javascript.ru/task/find-html-colors-6hex
*//

//Решение
    
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2";
var re = /#\w{6}/g
str.match(re) // #121212,#AA00ef

