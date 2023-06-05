console.time()
function checkNumber(quantity) {
    const results = [] // Массив результатов
    let testNumber = 1
    let primeNumber // Признак простого числа

    while (results.length<quantity) {
        primeNumber = true
        for (let index = 2; index < testNumber; index++) {
            if (testNumber % index === 0) {
                primeNumber = false; break
            }
        }
        if (primeNumber == true) {
            results.push(testNumber)
        }
        testNumber++
    }
    return results
}

console.log("Result:", checkNumber(Number(process.argv[2])))
console.timeEnd()