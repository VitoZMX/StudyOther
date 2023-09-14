// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

/*
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

/*
See below for an example of a cash-in-drawer array:
    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
    */

function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let changeDue = cash - price
    let change = []
    let totalCID = 0


    for (let i = 0; i < cid.length; i++) {
        totalCID += cid[i][1]
    }

    if (totalCID < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCID === changeDue) {
        return {status: "CLOSED", change: cid}
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        const denomination = cid[i][0]
        const unitValue = currencyUnits[denomination]
        let availableAmount = cid[i][1]
        let count = 0

        while (changeDue >= unitValue && availableAmount > 0) {
            changeDue -= unitValue
            changeDue = Math.round(changeDue * 100) / 100
            availableAmount -= unitValue
            count++
        }

        if (count > 0) {
            change.push([denomination, unitValue * count])
        }
    }

    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    return {status: "OPEN", change: change}
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))  // {status: "OPEN", change: [["QUARTER", 0.5]]}

