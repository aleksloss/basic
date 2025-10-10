
/**
 * РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
 * REGULAR EXPRESSION or RegExp
 * 
 * RegExp - это последовательность символов, 
 * которая определяет шаблон поиска. 
 * 
 * Для чего используются?
 * 
 * 1. Проверка, соответствует ли строка шаблону (например валидация email)
 * 2. Поиск подстроки в строке
 * 3. Замены найденных подстрок
 * 4. Извлечение информации из строки.
 * 
 * ОСНОВНОЙ СИНТАКСИС
 * 
 * В JS регулярное выражение создается двумя способами
 * 1. Литеральный: const regex = /шаблон/флаг 
 * этот способ используется чаще всего. 
 * 
 * 2. Через конструктор: const regex = new RegExp("шаблон", "флаг")
 * 
 * ФЛАГИ
 * i (ignore case) - Игнорировать регистр
 * g (global) - Глобальный поиск. То есть найти совпадения во всей строке
 * m (multiline) многострочный режим
 * u (unicode) - включает поддержку unicode
 * s (dotAll) - позволяет символу "." соответствовать также и символам новой строки 
 * 
 * ПРИМЕРЫ
 */

//1. Найти слово hello в строке
const regex1 = /hello/;
const str1 = "hello world";
console.log("Пример 1: ", regex1.test(str1));

//2. флаг i - игнорирование регистра
const regex2 = /hello/i;
const str2 = "Hello World";
console.log("Пример 2: ", regex2.test(str2));

//3. Используем флаг g - для глобального поиска
const regex3 = /l/g;
const str3 = "hello World";
console.log("Пример 3: ", str3.match(regex3));

//4. Поиск символов
const regex4 = /[aeiou]/g;
const str4 = "Hello World";
console.log("Пример 4: ", str4.match(regex4));

//5. Диапазон символов
const regex5 = /[a-f]/g;
const str5 = "abcde fghij";
console.log("Пример 5: ", str5.match(regex5));

//6. Метасимвол \d  (digit - цифра)
const regex6 = /\d/g;
const str6 = "My phone number is 123-456-7890";
console.log("Пример 6: ", str6.match(regex6));

//7. Метасимвол \w (word character)
//любая латинская буква, цифра или символ подчеркивания "_"
//это эквивалентно шаблону [a-zA-Z0-9_]
const regex7 = /\w/g;
const str7 = "user_id_123";
console.log("Пример 7: ", str7.match(regex7));

//8. Метасимвол \s (пробельный символ)
//найдет любой пробел, табуляцию, перенос строки
const regex8 = /\s/g;
const str8 = "hello\tworld\nnew line";
console.log("Пример 8: ", str8.match(regex8));

//9. Инвертированые метасимволы  \D \W \S
const regex9 = /\S/g;
const str9 = "ID: 12345";
console.log("Пример 9: ", str9.match(regex9));

//КВАНТИФИКАТОРЫ Quantifier (указание количества повторений)
//применяются к символу или группе, стоящей ПЕРЕД ними.

//10. квантификатор *  - ноль или более повторений
const regex10 = /go*/g;
const str10 = "go goo gooo";
console.log("Пример 10: ", str10.match(regex10));

//11. Квантификатор ?
//colou?r - ищем "сolo", затем "u" может быть, а может не быть, но потом - "r"
const regex11 = /colou?r/;
console.log("Пример 11 (color): ", regex11.test("color"));
console.log("Пример 11 (colour): ", regex11.test("colour"));

//12. Квантификатор {n}
//{n} - количество повторений
///\d{3}/g - ищет ровно 3 цифры подряд
const regex12 = /\d{3}/g;
const str12 = "123 45 6789 123";
console.log("Пример 12: ", str12.match(regex12));

//13. Квантификатор {n,}
//{n,} - n или больше повторений
const regex13 = /\d{2,}/g;
const str13 = "1 12 123 1234";
console.log("Пример 13: ", str13.match(regex13));

//14 Квантификатор {n,m}
//{n,m} - от n до m
const regex14 = /\d{2,3}/g;
const str14 = "1 12 123 1234";
console.log("Пример 14: ", str14.match(regex14));

//ГРАНИЦЫ И ЯКОРЯ

//15. Якорь ^ 
//^ - начало строки. Этот шаблон должен находится в начале
const regex15 = /^Hello/;
const str15 = "Hello World!";
console.log("Пример 15: ", regex15.test(str15));

//16. Якорь $
//$ - конец строки. Шаблон должен находится в самом конце
const regex16 = /World!$/;
const str16 = "Hello World!";
console.log("Пример 16: ", regex16.test(str16));

//ГРУППИРОВКА И АЛЬТЕРНАТИВЫ

//17 Группировка ()
//() - группирует несколько символов в единое целое. Можно применять квантификаторы
const regex17 = /(ha)/g;
const str17 = "hahaha ha hah";
console.log("Пример 17: ", str17.match(regex17));

//18 Альтернатива |   (Или)
//работает как дизъюнкция
const regex18 = /cat|dog/g;
const str18 = "I like cats and dogs.";
console.log("Пример 18: ", str18.match(regex18));

//19 Захват групп с помощью match()
const regex19 = /(\w+)@(\w+\.\w+)/;
const str19 = "test@example.com";
const match19 = str19.match(regex19);

console.log("Пример 19 (полное совпадение) ", match19[0]);
console.log("Пример 19 (группа 1) ", match19[1]);
console.log("Пример 19 (группа 2) ", match19[2]);

//Пример 20. Метод replace() с регулярным выражением
//Заменяет найденное в строке по шаблону
const regex20 = /-| /g;
const str20 = "2025-10-01 12:00";
console.log("Пример 20 ", str20.replace(regex20, ":"));

//Пример 21. Разделить строку на массив подстрок
//метод split()
const regex21 = /\d/g;
const str21 = "item1item2item3";
console.log("Пример 21 ", str21.split(regex21));

//Упражнение 1
//найти все слова JS в строке, не зависимо от регистра.
const exStr1 = "I love JS. js is awesome. Js is powerful";
const exRegex1 = /js/gi;
console.log("Упражнение 1 ", exStr1.match(exRegex1)); 

//Упражнение 2
//Проверить является ли номер телефона валидным.
//валидный формат ХХХ-ХХХ-ХХХХ
const exStr2_1 = "123-456-7890";
const exStr2_2 = "123-456-789";

const exRegex2 = /^\d{3}-\d{3}-\d{4}$/;
console.log("Упражнение 2 (валидный) ", exRegex2.test(exStr2_1));
console.log("Упражнение 2 (невалидный) ", exRegex2.test(exStr2_2));

//Упражнение 3. Убрать лишние пробелы
const exStr3 = "Hello     world,   this   is a  test.";
console.log("Упражнение 3 ", exStr3.replace(/\s+/g, " "));

//Упражнение 4. Валиция пароля
//пароль должен быть минимум 8 символов, содержать
//хотя бы одну букву в нижнем регистре и одну в вернхнем регистре

const pass1 = 'aB123456';
const pass2 = 'ab123456';
const exRegex4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//^ - начало строки
//(?=.*[a-z]) - просмотр вперед - где в строке есть строчная буква
//(?=.*[A-Z]) - просмотр вперед - где в строке есть заглавная буква
//(?=.*\d) - ищем цифру  
//{8,} - строка не менее 8 символов  
//$ - конец строки
console.log("Упражнение 4 (валидный) ", exRegex4.test(pass1));
console.log("Упражнение 4 (невалидный) ", exRegex4.test(pass2));




