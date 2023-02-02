const { convertTimeToWords } = require("./index")

describe("Time to words", () => {
  describe("Functional arguemnts", () => {
    it("should throw an error for non-string type arguments", () => {
      const arg = 5
      expect(() => convertTimeToWords(arg)).toThrow()
    })

    it("should not throw an error for string type arguments", () => {
      const arg = "eight thirty"
      expect(() => convertTimeToWords(arg)).not.toThrow()
    })
  })

  describe("Hour translation", () => {
    it("should translate the integer value to its appropriate human-readable string value", () => {
      const arg = "1:00"

      expect(convertTimeToWords(arg)).toEqual("one o'clock")
    })
  })

  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00")
    expect(timeInWords).toBe("midnight")
  })

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30")
    expect(timeInWords).toBe("half past eight")
  })

  it("Handles times after 30 mins", () => {
    const timeInWords = convertTimeToWords("2:45")
    expect(timeInWords).toBe("quarter to three")

    const nonIntervalicTime = convertTimeToWords("2:53")
    expect(nonIntervalicTime).toBe("seven to three")
  })

  it("Handles times before 30 mins", () => {
    const timeInWords = convertTimeToWords("2:15")
    expect(timeInWords).toBe("quarter past two")

    const nonIntervalicTime = convertTimeToWords("2:28")
    expect(nonIntervalicTime).toBe("twenty eight past two")
  })
})
