// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
function generateRandomPassword(length) {
  // Створюємо порожній рядок для збереження паролю.
  let password = "";

  // Створюємо рядок characters "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" з доступних символів для паролю.
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // За допомогою циклу for проходимось по кожному символу рядка characters
  for (let i = 0; i < length; i++) {
    // Визначаємо випадковий індекс символу зі списку characters та округляємо до найбільшого цілого, яке менше.
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Отримуємо символ з випадковим індексом.
    const character = characters[randomIndex];

    // Додаємо отриманий випадковий символ до паролю.
    password += character;
  }

  // Повертаємо пароль.
  return password;
}

console.log("Завдання: 1 ==============================");
console.log(generateRandomPassword(8));
// Виведе випадковий пароль довжиною 8 символів.

// Завдання 2
/**
 * Функція `calculateCircleArea` обчислює площу кола на основі його радіуса.
 *
 *  radius - Радіус кола.
 * Поверне: Площу кола.
 */
function calculateCircleArea(radius) {
  // Перевірка, чи переданий радіус є числом.
  if (typeof radius !== "number") {
    console.error("Радіус має бути числом.");
    return null;
  }

  // Обчислення площі кола за формулою PI * r^2, де PI - число Пі, а r - радіус.
  const area = Math.PI * radius * radius;

  // Повертаємо обчислену площу кола.
  return area;
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));
// Виведе площу кола з радіусом 5, наприклад 78.53981633974483.

// Завдання 3
/**
 * Функція `findMinMax` знаходить мінімальне та максимальне число в масиві.
 *
 *  numbers - Масив чисел.
 * Поверне: Об'єкт, що містить мінімальне та максимальне число.
 */
function findMinMax(numbers) {
  // Перевіряємо, чи переданий параметр є масивом.
  if (typeof numbers !== "object" || !Array.isArray(numbers)) {
    console.error("Параметр має бути масивом.");
    return null;
  }

  // Записуємо мінімальне значення масиву в змінну mix
  let min = numbers[0];

  // Записуємо максимальне значення масиву в змінну max
  let max = numbers[0];

  // Перебираємо всі елементи масиву
  for (const number of numbers) {
    // Якщо поточне значення менше min, то оновлюємо значення min
    if (number < min) {
      min = number;
    }

    // Якщо поточне значення більше max, то оновлюємо значення max
    if (number > max) {
      max = number;
    }
  }

  // Повертаємо об'єкт {min,max}, що містить знайдені мінімальне та максимальне число.
  return { min, max };
}

console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
function calculateHypotenuse(a, b) {
  // Перевіряємо, чи довжини катетів є числами. Оператор typeof повертає рядок,  if (typeof a !== "number" || typeof b !== "number") {
    if (typeof a !== "number" || typeof b !== "number") {
    console.error("Довжини катетів мають бути числами.");
    return null;
  }

  // Обчислюємо довжину гіпотенузи за теоремою Піфагора. c=√(a² + b²)
  const c = Math.sqrt(a * a + b * b);

  // Повертаємо обчислену довжину гіпотенузи.
  return c;
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Виведе довжину гіпотенузи для прямокутного трикутника з катетами довжиною 3 та 4, що дорівнює 5.

// Завдання 5
/**
 * Функція `roundObjectValues` заокруглює значення всіх числових властивостей об'єкта.
 *
 *  obj - Об'єкт для обробки.
 *  Поверне: Об'єкт з заокругленими значеннями числових властивостей.
 */
function roundObjectValues(obj) {
  // Перевіряємо, чи аргумент є об'єктом.
  // Також перевіряємо, що аргумент не є null.
  if (typeof obj !== "object" || obj === null) {
    console.error("Помилка: аргумент має бути об'єктом");
    return null;
  }

  // Отримуємо масив пар [ключ, значення] з об'єкта.
  const entries = Object.entries(obj);

  // Перебереємо за допомогою методу map кожну пару [ключ, значення].
  const roundedEntries = entries.map(([key, value]) => {
    // Перевіряємо, чи значення є числом.
    if (typeof value === "number") {
      // Округлюємо значення до найближчого цілого.
      value = Math.round(value);
    }

    return [key, value];
  });

  // Конвертуємо масив пар [ключ, значення] назад в об'єкт за допомогою Object.fromEntries().
  const roundedObject = Object.fromEntries(roundedEntries);

  // Повертаємо новий об'єкт з заокругленими значеннями числових властивостей.
  return roundedObject;
}

console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Виведе:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Завдання 6
/**
 * Функція `calculateVolumeCylinder` обчислює об'єм циліндра за заданими радіусом і висотою.
 *
 *  radius - радіус основи циліндра.
 *  height - висота циліндра.
 * Поверне: Об'єм циліндра.
 */
function calculateVolumeCylinder(radius, height) {
  // Перевіряємо, чи є радіус і висота числами. Якщо хоча б один з аргументів не є числом, виводимо повідомлення про помилку в консоль.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (typeof radius !== "number" || typeof height !== "number") {
    console.error("Радіус і висота мають бути числами.");
    return null;
  }

  // Обчислюємо об'єм циліндра за формулою V = PI * r^2 * h, де PI - число Пі, r - радіус, h - висота.
  const volume = Math.PI * Math.pow(radius, 2) * height;

  // Округляємо об'єму до найменшого цілого числа числа що більше.
  const roundedVolume = Math.ceil(volume);

  // Повертаємо обчислений об'єм.
  return roundedVolume;
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
function sumPositiveNumbers(numbers) {
  // Перевіряємо, чи є numbers масивом. Якщо numbers не є масивом, виводимо повідомлення "Помилка: аргумент має бути масивом чисел".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (!Array.isArray(numbers)) {
    console.error("Аргумент має бути масивом чисел");
    return null;
  }

  // Ініціалізуємо змінну для збереження суми додатніх чисел.
  let sum = 0;

  // Проходимо по всіх числах у масиві за допомогою циклу for.
  for (const number of numbers) {
    // Перевіряємо, чи є поточне число додатним, використовуючи Math.sign.
    if (Math.sign(number) === 1) {
      // Якщо число додатнє, додаємо його до суми.
      sum += number;
    }
  }

  // Повертаємо суму додатніх чисел.
  return sum;
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Виведе 12

// Завдання 8
/**
 * Функція `getFractionalPart` виводить дробову частину числа.
 * num - число.
 * Поверне: дробова частина числа.
 */
function getFractionalPart(num) {
  // Перевіряємо, чи є num числом. Якщо num не є числом, виводимо повідомлення "Помилка: вхідний аргумент має бути числом.".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (typeof num !== "number") {
    console.error("Помилка: вхідний аргумент має бути числом.");
    return null;
  }

  // Округляємо відкидаючи дробову частину.
  const integerPart = Math.floor(num);

  // Віднімаємо цілу частину від початкового числа, щоб отримати дробову частину.
  const fractionalPart = num - integerPart;

  // Округлюємо дробову частину з формату double до float.
  const roundedFractionalPart = Math.fround(fractionalPart);

  // Повертаємо дробову частину числа.
  return roundedFractionalPart;
}

console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));
// Виведе дробову частину числа, наприклад 0.34567001461982727

// Завдання 9
/**
 * Функція `compareAndRound` порівнює два числа та повертає найбільше число округлене до найближчого цілого.
 *
 *  num1 - Перше число.
 *  num2 - Друге число.
 *  Поверне: Найбільше число округлене до найближчого цілого.
 */
function compareAndRound(num1, num2) {
  // Перевірка, чи обидва аргументи є числами. Якщо хоча б один аргумент не є числом, виводимо повідомлення "Помилка: обидва аргументи мають бути числами.".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Помилка: обидва аргументи мають бути числами.");
    return null;
  }

  // Визначаємо найбільше число.
  const max = Math.max(num1, num2);

  // Округляємо найбільше число до найближчого цілого.
  const roundedMax = Math.round(max);

  // Повертаємо округлене число.
  return roundedMax;
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
function estimateInvestment(principal, interestRate, years) {
  // Перевірка, чи усі аргументи є числами. Якщо хоча б один аргумент не є числом, виводимо повідомлення про помилку в консоль.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (typeof principal !== "number" || typeof interestRate !== "number" || typeof years !== "number") {
    console.error("Усі аргументи мають бути числами.");
    return null;
  }

  // Розраховуємо суму інвестицій за формулою P*(1+rate)^years, де P - початкова сума інвестицій, rate - річна процентна ставка, years - кількість років.
  const amount = principal * Math.pow(1 + interestRate, years);

  // Округляємо ії до найближчого цілого
  const roundedAmount = Math.floor(amount);

  // Повертаємо розраховану суму інвестицій.
  return roundedAmount;
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Виведе  1276.

// Завдання 11
/**
 * Функція `isTotalPriceExceedsMaxPrice` приймає масив з об'єктами {price, title} та maxPrice.
 * Кожен об'єкт містить властивість price як дробове число.
 * Функція обраховує суму всіх price (totalPrice), конвертує totalPrice та maxPrice за допомогою Math.fround
 * і перевіряє чи не перевищує totalPrice maxPrice.
 *
 * products - масив з об'єктами {price, title}.
 * maxPrice - максимальна сума.
 * Повертає чи перевищує totalPrice maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  // Перевіряємо, чи аргумент products є масивом.
  // Якщо products не є масивом, виводимо повідомлення про помилку.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (!Array.isArray(products)) {
    console.error("Аргумент має бути масивом.");
    return null;
  }

  // Перевіряємо, чи аргумент maxPrice є числом.
  if (typeof maxPrice !== "number") {
    console.error("Аргумент має бути числом.");
    return null;
  }

  // Використовуємо метод reduce() для обчислення загальної ціни.
  let totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  // Конвертуємо totalPrice та maxPrice за допомогою Math.fround.
  const roundedTotalPrice = Math.fround(totalPrice);
  const roundedMaxPrice = Math.fround(maxPrice);

  // Порівнюємо, чи не перевищує totalPrice maxPrice.
  return roundedTotalPrice > roundedMaxPrice;
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Виведе: false
