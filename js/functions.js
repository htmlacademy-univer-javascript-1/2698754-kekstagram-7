// Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ','').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0 ; i--) {
    reversedString += normalizedString[i];
  }
  return reversedString === normalizedString;
}

// Функция, которая извлекает цифру из строки
function extractNumber(inputValue) {
  const string = inputValue.toString();
  let resultString = '';
  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];
    const digit = parseInt(symbol, 10);
    if (!Number.isNaN(digit)) {
      resultString += symbol;
    }
  }
  if (resultString === '') {
    return NaN;
  }
  return parseInt(resultString, 10);
}

checkStringLength('проверяемая строка', 20); // true
isPalindrome('топот'); // true
extractNumber(2023); // 2023
