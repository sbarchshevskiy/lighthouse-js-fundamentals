const talkingCalendar = function(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let finalDateString = '';

  const monthsInACalendar = ['January', 'February',
    'March', 'April', 'May', 'June', 'July',
  'August', 'September',
    'October', 'November', 'December'];

  let parsedIntegerDay = parseInt(day);

  let suffix;
  switch (parsedIntegerDay){
    case 1:
      suffix = 'st';
      break;
    case 21:
      suffix = 'st';
      break;
    case 31:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 22:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    case 23:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }
  return finalDateString = monthsInACalendar[month - 1] + ' ' + day + suffix + ', ' + year;
}





//   const monthsInACalendar = ['January', 'February',
//     'March', 'April', 'May', 'June', 'July',
//   'August', 'September',
//     'October', 'November', 'December'];
//
//   const monthsInACalendarNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//   10, 11, 12];
//
//   let result;
//   for (let i = 0; i < monthsInACalendar.length; i++) {
//     result = monthsInACalendarNumeric/monthsInACalendar[i];
//     if(result === 1){
//       monthsInACalendarNumeric[monthsInACalendar[i]] = result;
//       console.log(result)
//     }
//   }
//
//
// };

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/21"));
