export const checkCashRegister = (price, paidAmount) => {
    let paidAmountInCents = (Number(paidAmount) * 100).toFixed(2)
    let priceInCents = (Number(price) * 100).toFixed(2)
    let changeInCents = Number(paidAmountInCents - priceInCents).toFixed(2)

    // No change needed? lets exit quickly!
    if (changeInCents === 0) {
        return {
            status: "CLOSED",
            change: 0
        };
    }

    // currencies in cents
    const AVAILABLE_CURRENCIES = [
        ["FIVE HUNDRED", 50000],
        ["ONE HUNDRED", 10000],
        ["FIFTY", 5000],
        ["TWENTY", 2000],
        ["TEN", 1000],
        ["FIVE", 500],
        ["ONE", 100],
        ["QUARTER", 25],
        ["DIME", 10],
        ["NICKEL", 5],
        ["PENNY", 1]
    ]

    let returnCash = {};

    for (let i = 0; i <= changeInCents; i++) {
        AVAILABLE_CURRENCIES.map(currency => {
            let [currencyInWord, currencyInCents] = currency
            if (currencyInCents > changeInCents) return;
            let division = (changeInCents / currencyInCents).toFixed(2)
            let numberOfCurrency = Math.floor(division)

            returnCash[currencyInWord] = division
            changeInCents = changeInCents - (currencyInCents * numberOfCurrency)
            }
        )
    }
}