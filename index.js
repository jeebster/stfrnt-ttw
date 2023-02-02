const numberToWords = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half",
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: extend error handling via checking string formatting conforms to pattern
  if (typeof time !== "string") {
    throw new Error(`${time} is not a string type argument`)
  }

  if (checkForMidnight(time)) {
    return "midnight"
  }

  const [hourStr, minutesStr] = getHourAndMinutesAsIntFromTimeString(time)
  const hourInt = parseInt(hourStr)
  const minutesInt = parseInt(minutesStr)

  if (minutesInt > 30) {
    const nextHour = hourInt + 1
    const minutesFromNextHour = 60 - minutesInt

    return `${numberToWords[minutesFromNextHour]} to ${numberToWords[nextHour]}`
  } else if (minutesInt === 0) {
    return `${numberToWords[hourInt]} o'clock`
  }

  return `${numberToWords[minutesInt]} past ${numberToWords[hourInt]}`
}

function getHourAndMinutesAsIntFromTimeString(timeStr) {
  return timeStr.split(":")
}

function checkForMidnight(timeStr) {
  return timeStr === "0:00" ? true : false
}

module.exports = { convertTimeToWords, numberToWords }
