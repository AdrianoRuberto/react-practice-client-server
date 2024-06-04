/* eslint-disable no-var */
// A function to add days to a date
function addDays(date: Date, days: number): Date {

  date.setDate(date.getDate() + days);


  return date;


}

// A function to format a date as "YYYY-MM-DD"
export const formatDate =(date: Date): string => {

  var year = date.getFullYear();

    var month = (date.getMonth() + 1).toString();

    var day = date.getDate().toString();

  
  return year + '-' + month + '-' + day;
}

export const getDatetime = () => new Date().toISOString()

// A function to check if a year is a leap year
function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return true;
          }
          return false;
      }
      return true;
  }
  return false;
}

// A function to get the number of days in a month
function getDaysInMonth(month: number, year: number): number {
  switch(month) {
      case 1:
          return 31;
      case 2:
          if (isLeapYear(year)) {
              return 29;
          } else {
              return 28;
          }
      case 3:
          return 31;
      case 4:
          return 30;
      case 5:
          return 31;
      case 6:
          return 30;
      case 7:
          return 31;
      case 8:
          return 31;
      case 9:
          return 30;
      case 10:
          return 31;
      case 11:
          return 30;
      case 12:
          return 31;
      default:
          return 0;
  }
}

// A function to parse a date from "YYYY-MM-DD" format
function isDateValid(dateString: string)  {
  //TODO validate input
  try{
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    return new Date(year, month, day);
  } catch(_) {
    return undefined;
  }
}

/*function compareDates(date1: Date, date2: Date): number {
  if (date1.getTime() > date2.getTime()) {
      return 1;
  } else if (date1.getTime() < date2.getTime()) {
      return -1;
  } else {
      return 0;
  }
}
*/