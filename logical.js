// Логические И (AND)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let age = 15;
let hasDriversLicense = true;
let canRentCar = age > 18 && hasDriversLicense;
console.log(`Может ли арендовать машину? Ответ: ${canRentCar}`);

// Логические ИЛИ (OR - ||). Дизъюнкция.
console.log("---Логическое ИЛИ. ДИЗЪЮНКЦИЯ---");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

let hasBusTicket = false;
let hasTrainTicket = true;
//Человек может уехать из Иыхви, если у него есть билет
//на автобус или билет на поезд
let canLeave = hasBusTicket || hasTrainTicket;
console.log(`Может ли человек уехать? Ответ: ${canLeave}`);

// Логические сложение ИЛИ
//Логическое НЕ (NOT) операнд - "!"
//Инвертирует (на противоположное) логическое значение
console.log("---Логическое НЕ---");
console.log("!true", !true);
console.log("!false", !false);

let isDoorOpen = false;
console.log(`Дверь закрыта? Ответ: ${!isDoorOpen}`);

//Комбинированные примеры
console.log("---Комбинированные примеры---");

//доступ к закрытому разделу сайта
let isUserAutorized = true;
let accessLevel = "admin";
let hasPremium = false;

//Доступ разрешен, если пользватель авторизован и он админ
//Или у него есть премиум подписка

let isAccessGranted = isUserAutorized && (accessLevel === "admin" || hasPremium);
console.log(`Доступ разрешен? Ответ: ${isAccessGranted}`);




//Пример зомби-апокалипсиса

let hasWeapon = true;
let hasShelter = true;
let isFastRunner = true;

//Чтобы пережить ночь нужно иметь оружие И (нaйти укрытие ИЛИ уметь быстро бегать)
let iWillSurvive = hasWeapon && (hasShelter || isFastRunner);
console.log(`Есть у тебя шанс выжить? Ответ: ${iWillSurvive}`);

//Пример с драконом
let isKnightBrave = true;
let hasMagicSword = false;
let isDragonSleep = true;

//Герой может забрать золото если (он храбhый парень И у него есть магический меч)
//ИЛИ если дракон спит
let canGetTreasure = (isKnightBrave && hasMagicSword) || isDragonSleep
console.log(`Я получу сокровище дракона? Ответ: ${canGetTreasure}`);

//Пример агент 007
let knowsCode = true;
let hasCorrectCard = true;
let isLaserActive = true;

//Агент может войти в хранилище, если он знает код И у него правильная карта
//И лазерная сетка НЕ активна
let canEnter = (knowsCode && hasCorrectCard) && (!isLaserActive);
console.log(`Агент 007 может войти в хранилище? Ответ: ${canEnter}`);


//Пример - организация вечеринки в пятницу
let hasGoodMusic = true;
let hasEnoughDrinks = false;
let hasBoltDelivery = true;
let hasFriendsAvailable = true;
let isNaighbourAngry = true;
let hasSoundProofing = true;

//Условия:
//1. Должна быть хорошая музыка И (достаточно напитков ИЛИ доступна доставка еды)
//2. И все друзья могут прийти
//3. И (сосед не злится ИЛИ есть звукоизоляция)

let isFantasticParty = hasGoodMusic && (hasEnoughDrinks || hasBoltDelivery) && hasFriendsAvailable && (!isNaighbourAngry || !hasSoundProofing);
console.log(`Вечеринке быть? Ответ: ${isFantasticParty}`);



