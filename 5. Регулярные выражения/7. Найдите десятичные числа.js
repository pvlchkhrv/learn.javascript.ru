/* Задание 7

Найдите десятичные числа

Создайте регэксп, который ищет все числа, в том числе и с десятичной точкой, в том числе и отрицательные.

Пример использования:

var re = /* ваш регэксп */

var str = "-1.5 0 2 -123.4.";

alert( str.match(re) );   // -1.5, 0, 2, -123.4

https://learn.javascript.ru/task/find-decimal-numbers
*//

// Решение

var re = /-?\b\d+(\.\d+)?/g
var str = "-1.5 0 2 -123.4.";
str.match(re);   // 1.5, 0, 12, 123.4