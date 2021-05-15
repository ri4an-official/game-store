const toArabic = (romanNum: string) => {
    switch (romanNum) {
        case "I":
            return 1
        case "II":
            return 2
        case "III":
            return 3
        case "IV":
            return 4
        case "V":
            return 5
        case "VI":
            return 6
        case "VII":
            return 7
        case "VIII":
            return 8
        case "IX":
            return 9
        case "X":
            return 10
        default:
            throw new Error("Incorrect input")
    }
}
function toRoman(num: number) {
    const romanNumbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    } as any
    let str = ""
    Object.keys(romanNumbers).forEach((key) => {
        let res = Math.floor(num / romanNumbers[key])
        num -= res * romanNumbers[key]
        str += key.repeat(res)
    })
    return str
}

const a = { b: 1, r: 4, c: 4 }
Object.keys(a).forEach(console.log)

export const calculate = (str: string) => {
    const operation = str.split(" ")
    if (operation.length > 3 || operation.length <= 1)
        throw new Error("Operands requiere 2")
    let isRoman = false
    let firstNum = Number(operation[0])
    if (!firstNum) {
        firstNum = NaN
        isRoman = true
    }
    let secondNum = Number(operation[2])
    if (!secondNum) {
        secondNum = NaN
        isRoman = true
    }
    if ((firstNum && !secondNum) || (!firstNum && secondNum))
        throw new Error("Twice numbers requiere arabic or roman")
    if (!firstNum) firstNum = toArabic(operation[0])
    if (!secondNum) secondNum = toArabic(operation[2])

    if (firstNum > 10 || secondNum > 10) throw new Error("Numbers require less 10")
    if (firstNum < 1 || secondNum < 1) throw new Error("Numbers require most 1")
    const operator = operation[1]
    if (!isRoman) {
        switch (operator) {
            case "+":
                return Math.floor(firstNum + secondNum).toString()
            case "-":
                return Math.floor(firstNum - secondNum).toString()
            case "*":
                return Math.floor(firstNum * secondNum).toString()
            case "/":
                return Math.floor(firstNum / secondNum).toString()
            case "%":
                if (firstNum < secondNum) throw new Error()
                return Math.floor(firstNum % secondNum).toString()
            default:
                throw new Error("Incorrect input")
        }
    } else {
        switch (operator) {
            case "+":
                return toRoman(Math.floor(firstNum + secondNum)).toString()
            case "-":
                if (firstNum < secondNum) return ""
                return toRoman(Math.floor(firstNum - secondNum)).toString()
            case "*":
                return toRoman(Math.floor(firstNum * secondNum)).toString()
            case "/":
                return toRoman(Math.floor(firstNum / secondNum)).toString()
            case "%":
                if (firstNum < secondNum) throw new Error("")
                return toRoman(Math.floor(firstNum % secondNum)).toString()
            default:
                throw new Error("Incorrect input")
        }
    }
}
console.log(calculate("C + CM"))
