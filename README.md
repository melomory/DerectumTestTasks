# DerectumTestTasks

## Генератор HTML формы из JSON
Файл: formGenerator.js

Для выполнения задания был выбран JavaScript, так как он имеет нативный парсер JSON и нативно работает с DOM объектами, что сильно упростило задачу.

## Анализ предоставленного кода
Файл: codeAnalysis.cs

В предоставленном коде Func2 осуществляет создание ассоциативного массива и вставку в него элементов. Вставка осущевляется таким образом, что ассоциативный массив полeчается упорядоченным.
В моем понимании код оптимизировать можно следующим образом:

1. Исключить обращение к свойству массива (получение длины массива), используя для этого переменную arrayLength.
2. Сразу выполнять создание и присваивание элемента, исключив переменную keyValuePair.

В предоставленном коде Func1 осуществляет бинарный поиск ключа (позиции) по массиву.

В моем понимании код оптимизировать можно следующим образом:

1. Заменив рекурсивную функцию функцией с циклом, таким образом исключается использование стека вызовов.
2. Массив передавать в функцию по ссылке.
