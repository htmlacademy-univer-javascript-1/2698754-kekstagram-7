// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ','').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0 ; i--) {
    reversedString += normalizedString[i];
  }
  return reversedString === normalizedString;
};

// Функция, которая извлекает цифру из строки
const extractNumber = (inputValue) => {
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
};

// Функция, которая конвертирует время формата 'HH:MM' в минуты
const convertHoursToMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);

};

// Функция, которая проверят время встречи
const checkMeetingTime = (workStart, workEnd, meetingStart, durationMeeting) => {
  const startWork = convertHoursToMinutes(workStart);
  const endWork = convertHoursToMinutes(workEnd);
  const startMeeting = convertHoursToMinutes(meetingStart);
  const endMeeting = startMeeting + durationMeeting;
  return startMeeting >= startWork && endMeeting <= endWork;
};

checkStringLength('проверяемая строка', 20); // true
isPalindrome('топот'); // true
extractNumber(2023); // 2023
checkMeetingTime('08:00', '17:30', '14:00', 90); // true
